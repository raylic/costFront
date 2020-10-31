import request from '@/utils/request'

export function upload(data) {
    return request({
      url: '/chart/upload',
      method: 'post',
      data
    })
  }
export function getTableData(days) {//获取本月的数据, 参数是天数
  return request({
    url: '/chart/table',
    method: 'get',
    params: {days}
  })
}

export function getTotal() {//获取全局的数据,一个数组
  return request({
    url: '/chart/totalpiedata',
    method: 'get'
  })
}

export function deleteCostById(cid) {
  return request({
    url: '/chart/deletebycid',
    method: 'post',
    data: {cid}
  })
}