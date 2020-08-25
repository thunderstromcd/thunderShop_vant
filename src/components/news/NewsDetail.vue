<template>
  <div style="padding: 0 8px;margin-bottom:50px;">
    <!-- 头部 -->
    <header class="clearfix">
      <h4>{{detailData.title}}</h4>
        <span style="float:left">发表时间:{{detailData.add_time | dateformat('YYYY-MM-DD')}}</span>
      <span style="float:right">点击次数:{{detailData.click}}</span>
    </header>
    <!-- 详细内容 -->
    <p v-html="detailData.content" style="color:#535353"></p>

    <!-- 评论组件 -->
    <comment></comment>
 </div>
</template>

<script>
export default {
  data () {
    return {
      detailData: {}
    }
  },
  created () {
    // restful传参，存储在this.$route.params中
    this.getDetailData(this.$route.params.id)
  },
  methods: {
    // 得到相应文章数据
    async getDetailData (id) {
      const { data: res } = await this.$http.get(`/api/getnew/${id}`)
      if (res.status !== 0) this.$toast('获取文章数据失败！')
      this.detailData = res.message[0]
      console.log(this.detailData)
    }
  }
}
</script>

<style lang="less" scoped>
header{
  color: #1989fa;
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

</style>
