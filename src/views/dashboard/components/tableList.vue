<template>
  <el-table
    :data="tableData"
    height="350px"
    style="width: 100%">
    <el-table-column
    prop="date"
    label="日期"
    width="120">
    </el-table-column>
    <el-table-column
    prop="cost"
    label="金额"
    width="70">
    </el-table-column>
    <el-table-column
    prop="use"
    label="用途">
    </el-table-column>
    <el-table-column
      prop="category"
      label="分类"
      width="120">
      <template slot-scope="scope">
        <tableTag
          :cate="scope.row.tag"
          ></tableTag>
      </template>
    </el-table-column>
    <el-table-column 
      label="操作" 
      width="80"
      fixed="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.cid)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import tableTag from './tableTag'
import store from '../store'

export default {
  components:{
    tableTag
  },
  props:{
    tableData:{
      type: Array
    }
  },
  watch: {
    tableData: function(){
      console.log("tabledata change")
    }
  },
  methods: {
    handleDelete(cid){
      store.deleteCost(cid).then(() =>{
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      }).catch(err =>{
        this.$message.error(err)
      })
    }
  }
}
</script>