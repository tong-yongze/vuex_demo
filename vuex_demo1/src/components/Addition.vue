<template>
  <div>
    <h3>当前最新的count值为:{{ $store.state.count }}</h3>
    <button @click="btnAdd1">+1</button>
    <!--通过Mutation 传递参数自增 -->
    <p></p>
    <button @click="btnAdd2">+N</button>
    <button @click="btnAdd3">+1 Async</button>
    <button @click="btnAdd4">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnAdd1() {
      this.$store.commit('add')
    },
    btnAdd2() {
      this.$store.commit('addN', 2)
    },
    // 异步的让count 加1
    btnAdd3() {
      // dispatch 触发action
      this.$store.dispatch('addAsync')
    },
    btnAdd4() {
      this.$store.dispatch('addNAsync', 3)
    },
  },
}
</script>

<style lang="less" scoped>
</style>