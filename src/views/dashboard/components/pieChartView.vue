<template>
  <div>
    <div class="border-card" style="height:350px">
      <div class="nav">
        <div v-for="(item,index) in chartViewData" :key="item.lable" @click="select(index)" :class="selected[index] ? 'selected' : ''">{{item.label}}</div>
      </div>
      <pieChart class="chart" :chartdata="chartViewData[chartIndex].data" :eventflag="flag" />
    </div>
  </div>
</template>
<style scoped>
.border-card{
  box-shadow: #bbbbbb 0px 0px 5px;
  border: 1px solid #DCDFE6;
  color: #409EFF;
  display: block;
}
.nav{
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #F5F7FA;
}

.nav > div{
  text-align: center;
  flex: 100px 1;
  color: #909399;
  border-right: 1px solid transparent;;
  border-left: 1px solid transparent;
  border-bottom: 1px solid #E4E7ED;
  cursor: pointer;
  line-height: 2.5em;
  height: 2.5em;
}
.nav > div:hover{
  color: #409EFF;
}
.nav > .selected{
  background:#fff;
  color:#409EFF;
  border-right: 1px solid #E4E7ED;
  border-left: 1px solid #E4E7ED;
  border-bottom: 1px solid transparent;
}

</style>

<script>
import pieChart from './pieChart.vue'

export default {
  components: {
    pieChart
  },
  data(){
    return {
      chartIndex: 0,
      selected: [true, false, false],
      flag: false
    }
  },
  props: {
    chartViewData:{
      type: Array
    }
  },
  watch:{
    chartViewData: function(){
      //指示子组件更新视
      this.flag = !this.flag;
    }
  },
  methods: {
    select(index){
      this.selected.fill(false);
      this.selected[index] = true;
      this.chartIndex = index;
    }
  }
}
</script>