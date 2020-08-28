<template>
  <div>
    <!-- 头部标题 -->
     <header class="clearfix">
      <h4>{{imgInfo.title}}</h4>
        <span style="float:left">发表时间:{{imgInfo.add_time | dateformat('YYYY-MM-DD')}}</span>
      <span style="float:right">点击次数:{{imgInfo.click}}</span>
    </header>

      <!-- 图片预览 -->
    <div class="preview">
      <van-image v-for="(item, index) in imgList" :key="index" :src="item.src" @click="toPreview"/>
    </div>
    <!-- 内容描述 -->
    <p v-html="imgInfo.content" class="content"></p>

    <!-- 评论 -->
    <comment class="comment"></comment>
 </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data () {
    return {
      imgInfo: {},
      imgList: []
    }
  },
  mounted () {
    this.getImgInfo()
    this.getImgList()
  },
  methods: {
    // 获取图片详情
    async getImgInfo () {
      const id = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/getimageInfo/${id}`)
      if (res.status !== 0) {
        this.$toast('请求详情数据失败！')
      }
      this.imgInfo = res.message[0]
    },

    // 获取缩略图数组
    async getImgList () {
      const id = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/getthumimages/${id}`)
      if (res.status !== 0) {
        this.$toast('请求详情数据失败！')
      }
      this.imgList = res.message
    },
    // 预览照片
    toPreview () {
      // 将所有地址直接提取出来
      const newList = []
      this.imgList.forEach(t => newList.push(t.src))
      ImagePreview({
        images: newList,
        closeable: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
header{
  color: #FA7D09;
  margin: 0 10px;
  border-bottom: 1px solid #aac;
  h4{
    font-size: 16px;
    text-align: center;
  }
  span {
    font-size: 14px;
  }
}
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.preview{
  margin: 10px;
  .van-image {
    width: 108px;
    vertical-align: bottom;
    margin: 5px 5px;
    box-shadow: 1px 0 8px 1px rgba(0,0,0,.3);
  }
}

.content{
  padding: 8px;
  text-indent: 2em;
  color: #777;
  line-height: 24px;
}

.comment{
  margin-bottom: 60px;
}
</style>
