<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="thunder_shop"
      :left-arrow=showLeft
      @click-left="onClickLeft"
    />

    <!-- 内容区域 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item  v-for="(item, index) in icon" :key="index"  @click="toUrl(item.url)">
        <span>{{item.title}}</span>
        <template #icon="props">
          <i :class="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showLeft: false,
      active: 0,
      icon: [{
        title: '首页',
        active: 'iconfont icon-home',
        inactive: 'iconfont icon-home1',
        url: '/'
      },
      {
        title: '会员',
        active: 'iconfont icon-member',
        inactive: 'iconfont icon-i-member',
        url: '/member'
      },
      {
        title: '购物车',
        active: 'iconfont icon-cart1',
        inactive: 'iconfont icon-cart',
        url: '/cart'
      },
      {
        title: '搜索',
        active: 'iconfont icon-search',
        inactive: 'iconfont icon-search1',
        url: '/search'
      }
      ]
    }
  },
  beforeUpdate () {
    this.getLeftArrow()
  },
  methods: {
    // 是否显示左侧文案
    getLeftArrow () {
      if (this.$route.path !== '/home') {
        this.showLeft = true
      } else {
        this.showLeft = false
      }
    },
    // 返回
    onClickLeft () {
      this.$router.go(-1)
    },
    // 底部跳转
    toUrl (url) {
      this.$router.push(url)
    }

  }
}
</script>

<style lang="less" scoped>
/deep/.van-tabbar-item--active {
  color: #ff930a;
}

.van-nav-bar{
  background-color: #fa7d09;
}

/deep/.van-icon-arrow-left::before{
  color: #4a3f35;
}
</style>
