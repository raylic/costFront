<template>
  <div class="navBar">
    <img class="title" :src="require(`@/assets/title.png`)"/>
      <ul class="options">
        <li @click="helpClick">帮助</li>
        <li @click="logout">登出</li>
      </ul>
  </div>
</template>

<style scoped>
.navBar {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: #bbbbbb 0px 0px 5px;
  border-bottom: 1px solid #DCDFE6;
  border-top: 3px #57c6e1 solid;
  background: rgba(255,255,255,0.95);
}
.title {
  position: absolute;
  height: 100%;
  margin: 0;
  top: 0;
  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
}
.options {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  position: absolute;
  right: 10px;
}
.options > li {
  margin: 0 1rem;
}
.options > li:hover {
  color: #4facfe;
  cursor: pointer;
}
</style>

<script>
import {MessageBox} from 'element-ui'

export default {
  data(){
    return {
      title: '支出可视化平台'
    }
  },
  methods: {
    helpClick(){
      MessageBox.confirm('本系统将支出分为"固定支出"，"额外消费"，"日常支出"三种。提交数据时，在上方表单中选择消费种类，填入日期，用途和金额（元）后点击添加按钮即可。下方图表会在提交成功后实时刷新统计数据。\
      ', '使用指南', {
        confirmButtonText: '确认',
        showCancelButton: false
      })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>