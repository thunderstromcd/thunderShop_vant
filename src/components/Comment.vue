<template>
  <div>
    <h4>发表评论</h4>
    <hr />
    <div class="up">
      <textarea placeholder="请输入留言" :value="areaText" @blur="getVal"></textarea>
      <!-- 提交按钮  -->
      <van-button type="primary" @click="subComment">发表评论</van-button>
      <!-- 加载更多按钮 -->
      <van-button type="danger" plain @click="getMore">加载更多</van-button>

      <van-button type="danger" size="mini" style="width:80px" v-show="page!==1" @click="reBack">返回第一页</van-button>
    </div>
    <!-- 评论为空时显示 -->
    <p class="empty" v-show="empty">还没有人评论，快来说一句...</p>

    <div class="floor" v-for="(item, index) in commentList" :key="index">
      <div class="comHead">
        <span>第{{index+1}}楼</span>
        <span>用户：{{item.user_name}}</span>
        <span>发表时间：{{item.add_time | dateformat('YYYY-MM-DD')}}</span>
      </div>
      <p class="content">{{item.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentList: [],
      empty: false,
      page: 1,
      areaText: ''
    }
  },
  mounted () {
    this.getComment()
  },
  methods: {
    // 得到评论数据
    async getComment () {
      // 通过url得到id
      const artid = +this.$route.params.id
      const { data: res } = await this.$http.get(
        `/api/getcomments/${artid}?pageindex=${this.page}`
      )
      // 如果没有评论
      if (res.message.length === 0 && this.page === 1) {
        this.empty = true
      }
      this.commentList = res.message
    },
    // 文本域值
    getVal (e) {
      this.areaText = e.target.value.trim()
    },
    // 上传评论
    async subComment () {
      const artid = this.$route.params.id - 0
      const { data: res } = await this.$http.post(`/api/postcomment/${artid}`, {
        content: this.areaText
      })
      if (res.message === '评论内容不能为空！') {
        this.$toast('评论内容不能为空！')
      }
      // 更新评论
      this.getComment()
      this.areaText = ''
      this.empty = false
    },
    // 加载更多评论
    getMore () {
      this.page += 1
      this.getComment()
    },
    // 返回第一页评论
    reBack () {
      this.page = 1
      this.getComment()
    }
  }
}
</script>

<style lang="less" scoped>
.up{
  padding: 0 5px;
}
textarea {
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  resize: none;
  border: 2px solid #777;
  padding: 10px;
  text-indent: 2em;
  border-radius: 20px;
}
.van-button {
  width: 100%;
  margin: 5px 0;
}
.empty {
  color: #777;
  text-indent: 2em;
  line-height: 20px;
}
.comHead{
  background-color: #ccc;
  padding: 8px;
}

.floor{
  span {
    margin-right: 10px;
  }
}
</style>
