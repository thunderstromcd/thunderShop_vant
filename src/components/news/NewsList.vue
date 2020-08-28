<template>
  <div>

    <!-- <van-loading color="#1989fa" v-show="loading"/> -->

    <!-- 下拉刷新 -->
    <van-pull-refresh
    v-model="isLoading"
    success-text="刷新成功"
    @refresh="onRefresh"
    >
    <!-- 下拉列表 -->
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <!-- 卡片 -->
            <van-card
            :thumb="item.img_url"
            v-for="(item, index) in list" :key="index"
            @click="toDetail(item.id)"
            >
                <template #title>
                    <p class="text">{{item.title}}</p>
                </template>
                <template #price>
                    <span>发表时间:</span><span>{{item.add_time}}</span>
                </template>
                <template #num>
                    <span>点击:{{item.click}}</span>
                </template>
            </van-card>
        </van-list>
    </van-pull-refresh>
 </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      //  下拉正在刷新状态
      isLoading: false
    }
  },
  mounted () {

  },
  methods: {
    async getNewsList () {
      const { data: res } = await this.$http.get('/api/getnewslist')
      //   console.log(res)
      this.list = res.message
    },
    onLoad () {
      // 异步获取数据
      this.getNewsList()
      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      if (this.list.length >= 10) {
        this.finished = true
      }
    },
    // 下拉刷新获取数据
    onRefresh () {
      // 异步刷新数据
      this.getNewsList()
      this.isLoading = false
    },
    // 跳转到对应详情页
    toDetail (id) {
      this.$router.push('/newsdetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.van-loading{
  margin: 0 auto;
}
/deep/.van-card{
    border-radius: 10px;
    background-color: #ebecf1;
    padding: 8px;
    margin: 5px;
}
.text{
    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
span{
    font-size: 12px;
    color: #226aff;
}
</style>
