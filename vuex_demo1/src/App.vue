<template>
  <div>
    <my-Additon></my-Additon>
    <p>---------------------</p>
    <my-Subtraction></my-Subtraction>
  </div>
</template>

<script>
import Additon from './components/Addition'
import Subtraction from './components/Subtraction'

export default {
  data() {
    return {}
  },
  components: {
    'my-Additon': Additon,
    'my-Subtraction': Subtraction,
  },
}
</script>

<style lang="less" scoped>
</style>