<template>
  <div>
    <navBar class="navBar"/>
    <addForm  class="addForm" />
    <div class="charts">
        <pieChartView  class="pie" :chartViewData="store.chartViewData"/>
        <tableList class="table" height='350px' :tableData="store.tableData" />
        <barChart class="bar" height='350px' :barData="store.barData" />
        <calendar class="calendar" height='350px' :calendarData="store.calendarData" />
    </div>

  </div>
</template>

<style scoped>
  .navBar{
    z-index: 10;
    height: 3.5em;
  }
  .addForm{
    margin-top: 4.5em;
  }
  .charts {
    display: flex;
    flex-flow: row wrap;
  }
  .charts > * {
    margin: 10px 20px;
  } 
  .pie {
    flex: 400px 1;
  }
  .bar {
    padding-top: 20px;
    flex: 1000px 1;
    box-shadow: #bbbbbb 0px 0px 5px;
    border: 1px solid #DCDFE6;
  }
  .table {
    flex: 400px 1;
    box-shadow: #bbbbbb 0px 0px 5px;
    border: 1px solid #DCDFE6;
  }
  .calendar {
    flex: 600px 1;
    box-shadow: #bbbbbb 0px 0px 5px;
    border: 1px solid #DCDFE6;
  }
  </style>

<script>
import navBar from './components/navBar'
import pieChartView from './components/pieChartView'
import addForm from './components/addForm'
import barChart from './components/barChart'
import tableList from './components/tableList'
import calendar from './components/calendar'
import store from './store'

export default {
  components: {
    navBar,
    pieChartView,
    addForm,
    barChart,
    tableList,
    calendar
  },
  data(){
    return{ store }
  },   
  created(){
    this.store.initStore();
  }
}
</script>
