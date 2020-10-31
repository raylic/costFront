<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import {getLastMonthDays} from '@/utils'

const animationDuration = 1000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '80%'
    },
    height: {
      type: String,
      default: '300px'
    },
    barData: {
      type: Array
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  computed: {
    xAxisData(){
      let d = new Date();
      let arr =[];
      let day;
      let month;
      for(let i = 0; i < 7; i++){
        day = d.getDate()-i;
        month = d.getMonth()+1;
        if(day <= 0) {
          day += getLastMonthDays(d);
          month = (month - 2 + 12) % 12 + 1;  
        }
        arr.unshift( month + '.' + day) ;
      }
      return arr;
    }
  },
  watch: {
    barData: function(){
      console.log('barchart change')
      this.initChart();
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el,'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        //根据今天动态生成
        xAxis: [{
          type: 'category',
          data: this.xAxisData,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: true
          }
        }],
        series: [{
          color: '#2575fc',
          name: this.barData[0].name,
          type: 'bar',
          stack: 'vistors',
          barWidth: '40%',
          data: this.barData[0].value,
          animationDuration
        }, {
          color: '#fa709a',
          name: this.barData[1].name,
          type: 'bar',
          stack: 'vistors',
          barWidth: '40%',
          data: this.barData[1].value,
          animationDuration
        },
        {
          color: '#d57eeb',
          name: this.barData[2].name,
          type: 'bar',
          stack: 'vistors',
          barWidth: '40%',
          data: this.barData[2].value,
          animationDuration
        }]
      })
    }
  }
}
</script>
