<template>
    <el-form :model="formData" class="form" :rules="rules" ref="form">

    <el-radio-group v-model="formData.radioVal" class="radio">
      <el-radio-button label="固定"></el-radio-button>
      <el-radio-button label="额外"></el-radio-button>
      <el-radio-button label="日常"></el-radio-button>
    </el-radio-group>

    <el-date-picker
      v-model="formData.dateVal"
      type="date"
      class="date"
      placeholder="日期(默认是今日)">
    </el-date-picker>

    <el-form-item prop="cost" class="input">
        <el-input v-model="formData.cost" placeholder="输入用途和金额（用空格隔开）"></el-input>
    </el-form-item>
    
    <el-button type="primary" plain class="commit" @click="onSubmit">添加</el-button>

    </el-form>
</template>


<script>
import { formatDate } from '@/utils'
import store from '../store'

export default {
  data(){
    const priceValidator = (rule, value, callback) => {
      const arr = value.split(' ');
      if (arr.length != 2) {
        callback(new Error('请检查输入'))
      }
      if(arr[1] <= 0){
        callback(new Error("金额必须是数字"))
      }
      callback()
    }
      return{
        formData: {
          radioVal:'固定',
          dateVal: '',
          cost: ''
        },
        rules: {
          cost: [
          { required: true, trigger: 'blur', message: '输入不能为空' },
          { validator: priceValidator, trigger: 'blur' }]
        }    
      }
  },
  methods:{
    onSubmit(){
      this.$refs.form.validate((isValid, errors) => {
        if(isValid) {
          //封装数据
          let postDate = this.formData.dateVal || new Date();
          postDate = formatDate(postDate);
          const arr = this.formData.cost.split(' ');
          const postPrice = Number(arr[1]);
          const postData ={
            tag: this.formData.radioVal,
            date: postDate,
            use: arr[0],
            cost: postPrice
          }
          //发送post请求
          store.addToTable(postData).then(res =>{
            //修改成功显示
            this.$message({
              message: res.msg,
              type: 'success'
            })
            //清除输入框
            this.clearInput();
          }).catch(err => {
            this.$message.error(err)
          })
          
        }
        else{
          this.$message.error('请检查输入是否正确');
          console.log(isValid, errors)
        }
      })
    },
    clearInput(){
      this.formData.cost = '';
    }
  }
}
</script>

<style scoped>
.form{
  display: flex;
  margin: 10px 20px;
  align-content: space-around;
  align-items: flex-start;
  flex-flow: row wrap;   
  box-shadow: #bbbbbb 0px 0px 5px;
  border: 1px solid #DCDFE6;
}
.form > * {
  margin: 10px;
  flex: 200px 1;
  padding: none;
  margin: none;
  height: 40px;
  box-sizing: border-box;
}
.form > .input {
  flex: 200px 10;
  position: relative;
  bottom: 0.5px;
}
.form > .radio {
  flex: 220px 0;
}
.form > .commit {
  flex: 100px 1;
}
.form > .date {
  flex: 200px 1;
}
</style>