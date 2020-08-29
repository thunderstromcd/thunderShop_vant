<template>
  <div>
      <div class="header_title">
            <!-- logo -->
            <h1 class="box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmvYNVUYtW-u3Ea8MxjYVKmlS4qzkqEUgZYA&usqp=CAU" alt="">
            </h1>
            <p>账号登录</p>
      </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
    //   const res = await this.$http.post('/register',{param:{
    //     username:
    //   }})
    //   console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.header_title{
    margin: 20px auto;
    text-align: center;

    .box{
        width: 68px;
        height: 68px;
        margin: 0 auto;
        img {
            width: 68px;
            height: 68px;
            border-radius: 10px;
        }
    }
    p{
        font-size: 20px;
        color: #000;
        font-weight: normal;
    }
}

</style>
