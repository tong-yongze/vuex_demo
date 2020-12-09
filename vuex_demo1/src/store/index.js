import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有 moutations 中定义的函数 才能修改state 数据
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },

  },
  actions: {
    addAsync(context) {
      // 在 actions中 不能直接修改 state 中的数据
      // 必须通过 context.commit() 触发某个 mutation 才行
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }

  },

})
