<template>
    <div :style="{height:height, width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {  
    mixins: [resize],
    data(){
        return{
        }
    },
    mounted() {
        this.$nextTick(() => {
        this.initChart()
        })
    },
    beforeDestroy(){
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '300px'
        },
        chartdata: {
            type: Array,
            default: function(){
                return [{value:0, name:'固定支出'}]
            }
        },
        eventflag: {
            type: Boolean
        }
    },
    computed: {
        legendData() {
            let arr = []
            for(let i of this.chartdata){
                arr.push(i.name);
            }
            return arr;
        }
    },
    //响应chardata的变化
    watch: {
        chartdata: function(){
            this.initChart()
        },
        eventflag: function(){
            this.initChart()
        }
    },
    methods: {
        initChart(){
            const option = {
                legend: {
                    center: 'center',
                    bottom: '10',
                    data: this.legendData
                },
                series : [
                {
                    color: ['#2575fc','#d57eeb', '#fa709a'],
                    name: '总支出',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data: this.chartdata,
                    itemStyle:{ 
                    normal:{ 
                        label:{ 
                            show: true, 
                            formatter: '{b}: {c}\n({d}%)' 
                            }, 
                            labelLine :{show:true} 
                        } 
                    }
                }]
            }
            this.chart = echarts.init(this.$el, 'macarons')
            this.chart.setOption(option, true);
        }
    }
}
</script>

<style scoped>
</style>