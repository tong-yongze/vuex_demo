<template>
  <div>
    <h3>当前最新的count值为:{{ count }}</h3>
    <button @click="btn1">-1</button>
    <button @click="subN(3)">-N</button>
    <!-- <button @click="btn3">-1 Async</button> -->
    <button @click="subAsync()">-1 Async</button>
    <button @click="subNAsync(6)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
  },
  methods: {
    // 简写到click中是因为 在vuex中按需导入了mapMutations，mapActions 在方法节点中 调用了这些函数 把全局某个action映射为当前组件的 methods函数 这样在按钮的事件处理函数 actions
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btn1() {
      this.sub()
    },
    // btn2() {
    //   this.subN(3)
    // },
    // btn3() {
    //   this.subAsync()
    // },
  },
}
</script>

<style lang="less" scoped>
</style>