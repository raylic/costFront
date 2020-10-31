<template>
  <el-calendar 
    v-model="value"
    class="calendar"
    >
    <template
    slot="dateCell"
    slot-scope="{date}">
    <div class="cell">
      <div class="date">
        {{ date.getDate() }} 
      </div>
      <div class="price" >
        {{ (calendarData[date.getDate()] != 0 && date.getMonth() === thisMonth) ? calendarData[date.getDate()] : ''}}
      </div>
    </div>
  </template>
  </el-calendar>    
</template>
<script>

export default {
  data() {
    return {
      value: new Date(),
      thisMonth: new Date().getMonth()
    }
  },
  props: {
    calendarData: {
      type: Array,
      default: function(){
        return [] 
      }
    }
  }
}
</script>
<style scoped>
.cell {
  position: relative;
  width: 100%;
  height: 4rem;
  overflow: hidden;
}
.price{
  position: absolute;
  text-align: center;
  width: 100%;
  top: 0.7rem;
  left: 0;
  font-size: 2rem;
  color: #b1ec27;
}
.date {
  position: absolute;
  text-align: left;
  width: 20%;
  top: 0;
  left: 0;
}
.safe{
  color: #42d62f;
}
.warn {
  color: #b1ec27;
}
.danger {
  color: #e99a32;
}
</style>