export function formatDate(date){
  let month = date.getMonth()+1;
  let day = date.getDate();
  if (month < 10){
      month = '0' + month;
  }
  if (day < 10){
      day = '0' + day;
  }
  return date.getFullYear() + '-' + month + '-' + day;
}
  
export function floatAdd(num1, num2){
  return (num1*10 + num2*10)/10;
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function getLastMonthDays(date){
  let days;
  switch((date.getMonth()-1+12)%12){//求上个月的
    case 0: days=31; break;
    case 1: days=28; break;
    case 2: days=31; break;
    case 3: days=30; break;
    case 4: days=31; break;
    case 5: days=30; break;
    case 6: days=31; break;
    case 7: days=31; break;
    case 8: days=30; break;
    case 9: days=31; break;
    case 10: days=30; break;
    case 11: days=31; break;
  }
  if( date.getFullYear() % 4 == 0 && days == 28) days++;
  return days;
}