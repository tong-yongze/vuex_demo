<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handleInputChange" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infolist" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框  第一种是普遍框架的用法 -->
        <!-- <a-checkbox :checked=item.done @change="(e)=>{cbStatusChanged(e,item.id)}">{{ item.info }}</a-checkbox> -->
        <!-- 第二种是react 写法 -->
        <a-checkbox :checked=item.done @change="cbStatusChanged($event,item.id)">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeByItemId(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneLength}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewKey === 'all' ? 'primary' :'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey === 'undone' ? 'primary' :'default'" @click='changeList("undone")'>未完成</a-button>
          <a-button :type="viewKey === 'done' ? 'primary' :'default'" @click='changeList("done")'>已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="chean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import {mapState ,mapGetters} from 'vuex';

export default {
  name: "app",
  data() {
    return {
                                     
    };
  },
  created(){
    this.$store.dispatch('getList')
  },
  computed:{
    ...mapState(['inputValue','viewKey']),
    ...mapGetters(['unDoneLength','infolist'])
  },
  methods:{
    // 监听文本框 内容变化
  handleInputChange(e){
    // console.log(e.target.value);   传递参数
    this.$store.commit('getInputValue',e.target.value)
  },
  // 向表单中新增 事项
  addItemToList(){
    if(this.inputValue.trim().length<=0){
      return this.$message.warning('文本框内容不能让空')
    }
  this.$store.commit('addItem')
  },
  // 根据id 删除事项  
  removeByItemId(id){
  // console.log(id);
  this.$store.commit('removeItem',id)
    },
    // 监听复选框选中状态
  cbStatusChanged(e,id){
      // console.log(e.target.checked); 通过它可以接收最新的选中状态
    const param ={
      id:id,
      status:e.target.checked
    }
    this.$store.commit('changeStatus',param)
    },
    //清除已完成的任务
    chean(){
      this.$store.commit('cheanDone')
    },
    // 修改列表上展示表的数据
  changeList(key){
    // console.log(key);
    this.$store.commit('changeViewKey',key)
  }
  }
  
};
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>