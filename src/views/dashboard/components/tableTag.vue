<template>
    <div :class="front" id="tag">{{word}}</div>
</template>
<script>
export default {
  props:{
    cate: {
      type: String,
      default: 'fixed'
    }
  },
  computed: {
    word() {
      let cate;
      switch (this.cate) {
        case 'fixed':
          cate = '固定'
          break;
        case 'daily':
          cate = '日常'
          break;
        case 'extra':
          cate = '额外'
          break;
        case '固定':
          cate = '固定'
          break;
        case '日常':
          cate = '日常'
          break;
        case '额外':
          cate = '额外'
          break;
      }
      return cate;
    },
    front(){
    let cate;
      switch (this.cate) {
        case '固定':
          cate = 'fixed'
          break;
        case '日常':
          cate = 'daily'
          break;
        case '额外':
          cate = 'extra'
          break;
        case 'fixed':
          cate = 'fixed'
          break;
        case 'daily':
          cate = 'daily'
          break;
        case 'extra':
          cate = 'extra'
          break;
      }
      return cate;
    }
  }
}
</script>
<style scoped>
#tag{
    display: inline-block;
    padding: 0.2em 0.4em;
    border-radius: 0.2em;
}
.fixed{
  border: 1px solid #2575fc;
  color: #2575fc;
}
.daily{
  border: 1px solid #d57eeb;
  color: #d57eeb;
}
.extra{
  border: 1px solid #fa709a;
  color: #fa709a;
}
</style>