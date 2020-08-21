<template>
  <div>
      <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
    </van-swipe>

    <!-- 九宫格 -->
    <van-grid :column-num="3">
        <van-grid-item @click="goPage(item.url)" v-for="(item,index) in iconImage" :key="index" :icon="item.image" :text="item.title" />
    </van-grid>
 </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
      ],
      iconImage: [
        { image: '/images/menu1.png', title: '新闻头条', url: '/newslist' },
        { image: '/images/menu2.png', title: '图片分享', url: '/share' },
        { image: '/images/menu3.png', title: '商品购买', url: '/shop' },
        { image: '/images/menu4.png', title: '留言反馈', url: '/feedback' },
        { image: '/images/menu5.png', title: '视频专区', url: '/video' },
        { image: '/images/menu6.png', title: '联系我们', url: '/contact' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    // 图标跳转页面
    goPage (url) {
      console.log(url)
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe__track img{
    width: 100%;
    height: 200px;
}
/deep/.van-grid-item__content::after{
  border: 0 none;
}
/deep/.van-icon__image{
    width: 60px;
    height: 60px;
}
</style>
