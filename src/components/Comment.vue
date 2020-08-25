<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入留言"></textarea>
 </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
textarea{
  width: 93%;
  height: 100px;
  resize: none;
  border: 2px solid #777;
  padding: 10px ;
  text-indent: 2em;
  border-radius: 20px;
}
</style>
