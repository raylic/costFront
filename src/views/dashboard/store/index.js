
import {getTableData, deleteCostById, upload, getTotal} from '@/api/chart'
import {formatDate, floatAdd, getLastMonthDays} from '@/utils'

const originPieData = [//今天 //最近一周 //所有
  {
    label: '今日',
    data: [
      {value:0, name:'固定支出'},
      {value:0, name:'日常支出'},
      {value:0, name:'额外消费'}
    ]
  },
  {
    label: '最近一周',
    data: [
      {value:0, name:'固定支出'},
      {value:0, name:'日常支出'},
      {value:0, name:'额外消费'}
    ]
  },
  {
    label: '合计',
    data: [
      {value:235, name:'固定支出'},
      {value:274, name:'日常支出'},
      {value:310, name:'额外消费'}
    ]
  }
]; 

let store = {
  tableData:[],
  barData: [//最近7天的数据
    {name:'固定', value:[], color:'#2575fc'},
    {name:'日常', value:[], color:'#fa709a'},
    {name:'额外', value:[], color:'#d57eeb'}
  ],
  calendarData: [],
  chartViewData: originPieData,

  //向服务端请求添加数据，添加到本地缓存
  addToTable(postData) {
    return new Promise((resolve,reject) =>{
      upload(postData).then(res => {
        //添加cid
        postData.cid = res.data.insertId;
        //如果服务端成功则添加本地数据
        this.tableData = [postData, ...this.tableData]
        this.initBarData()
        this.initPieData()
        this.initCalendarData();
        //回调组件的成功信息
        resolve(res)
      }).catch(err =>{
        reject(err)
      })
    })
    
  },
  //向服务端请求删除数据，并删除本地缓存
  deleteCost(cid){
    return new Promise((resolve,reject) =>{
      deleteCostById(cid).then(res => {
        //如果服务端成功则删除本地数据
        const index = this.tableData.findIndex(function(item){
          return item.cid == cid;
        })
        console.log(this.tableData.splice(index,1));
        this.initBarData()
        this.initPieData()
        this.initCalendarData();
        //弹出删除成功的窗口
        resolve(res)
      }).catch(err =>{
        reject(err)
      })
    })
    
  },
  initCalendarData() {
    //计算需要的天数
    const days = new Date().getDate();
    getTableData(days).then(res => {
      let calendarData = new Array(days+1)
      calendarData.fill(0);
      for(let item of res.data){
          calendarData[parseInt(item.date.slice(8,10))] += Number(item.cost) 
          console.log(item.date.slice(8,10))
      }
      this.calendarData = calendarData;
    })
  },
  //从服务端获取数据
  initTableData() {
    const days = 7;
    return getTableData(days).then(res =>{
      //setData
      this.tableData = res.data.map(item => {
        return {
          cid: item.cid,//保存cid作为删除的索引
          date: item.date,
          cost: item.cost,
          use: item.use,
          tag: item.tag
        }
      });
    })
  },
  //利用tableData初始化bardata
  initBarData(){
    const today = formatDate(new Date())
    let barData = [//最近7天的数据
      {name:'固定', value:[], color:'#2575fc'},
      {name:'额外', value:[], color:'#d57eeb'},
      {name:'日常', value:[], color:'#fa709a'}
    ]
    for(let item of barData){
      item.value.length = 7;
      item.value.fill(0)//固定
    }
    for(let item of this.tableData){
      let i, index;
      switch(item.tag){
        case `${barData[0].name}`: i = 0; break;
        case `${barData[1].name}`: i = 1; break;
        case `${barData[2].name}`: i = 2; break;
      }
      index = Number((today.slice(8,10)-item.date.slice(8,10)));//几天前
      if(index < 0) index += getLastMonthDays(new Date());//会有跨月存在，此时要加上上个月的天数
      barData[i].value[6-index] = floatAdd(barData[i].value[6-index],Number(item.cost));
    }
    console.log(barData)
    this.barData = barData
  },
  //利用tabledata 初始化chartViewdata 的 今日 和最近一周
  initPieData(){
    let chartViewData = [...this.chartViewData]
    //初始化
    for(let item of chartViewData){
      for(let dep of item.data){
        dep.value = 0;
      }
    }
    const today = formatDate(new Date);
    for(let item of this.tableData){
      let i;
      switch(item.tag){
        case '固定': i = 0; break;
        case '日常': i = 1; break;
        case '额外': i = 2; break;
      }
      if(item.date == today){
        chartViewData[0].data[i].value = floatAdd(chartViewData[0].data[i].value, parseFloat(item.cost))
      }
      chartViewData[1].data[i].value = floatAdd(chartViewData[1].data[i].value, parseFloat(item.cost))
    }
    //获取总的数据后刷
    getTotal().then(res => {
      chartViewData[2].data = res.data;
      this.chartViewData = chartViewData;
    })
  },

  //初始化store中的值
  async initStore() {
    this.initCalendarData();
    await this.initTableData();
    this.initBarData();
    this.initPieData();
  }
}

export default store