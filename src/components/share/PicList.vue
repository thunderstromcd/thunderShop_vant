<template>
  <div>
        <van-tabs @click="changeCategory">
            <van-tab v-for="(item, index) in categoryList" :key="index" :title="item.title">
                <ul>
                    <li v-for="(item) in imageList" :key="item.id" @click="toDetail(item.id)">
                        <van-image
                        width="100%"
                        lazy-load
                        :src="item.img_url"
                        />
                        <div class="overlay">
                            <p class="title">{{item.title}}</p>
                            <p class="content">{{item.zhaiyao}}</p>
                        </div>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
 </div>
</template>

<script>
export default {
  data () {
    return {
      // 图片分类数据 没图片
      categoryList: [],
      idList: [],
      // 图片列表的数据 含图片
      imageList: [],
      // 遮罩层显示隐藏
      show: false
    }
  },
  mounted () {
    this.getCategoryList()
    this.getimages()
  },
  methods: {
    // 图片分类数据
    async getCategoryList () {
      const { data: res } = await this.$http.get('/api/getimgcategory')
      res.message.unshift({ title: '全部', id: 0 })
      this.categoryList = res.message
      //   循环取出分类id 单独存储
      this.categoryList.map(t => {
        this.idList.push(t.id)
      })
    },
    // 图片列表数据
    async getimages () {
      const { data: res } = await this.$http.get('/api/getimages/' + 0)
      this.imageList = res.message
    },
    // 点击切换分类
    async changeCategory (i) {
      const { data: res } = await this.$http.get(`/api/getimages/${this.idList[i]}`)
      //   console.log(res)
      this.imageList = res.message
    },
    // 点击进入详情页
    toDetail (id) {
      this.$router.push('/picdetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
ul{
    padding: 8px;
    li{
        position: relative;
        margin: 8px 0 ;
        /deep/.van-image__img{
            border-radius: 10px;
        }
        .overlay{
            position: absolute;
            left: 0;
            bottom: 4px;
            width: 100%;
            height: 75px;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 0 0 10px 10px;
            color: #fff;
            font-size: 12px;
            .content {
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
}

</style>
