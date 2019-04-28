<template>
    <div id="box">
              <!-- 开始 -->
    <div class="tou">
        <ul class="gl">
            <li>
                <span @click="shouye">首页 /</span>
                <span>数据管理 /</span>
                <span>管理员列表</span>
            </li>
            <li></li>
            <li></li>
        </ul>

        <el-row class="block-col-2">
          <!-- 开始 -->
  <el-col :span="12">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
          <img src="//elm.cangdu.org/img/default.jpg" alt="">
      </span>
      <el-dropdown-menu>
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
<!-- 结束 -->
</el-row>
    </div>
<!-- 结束 -->

<el-table
:data="data"
style="width: 100%">
<el-table-column
prop="user_name"
label="姓名">
</el-table-column>
<el-table-column
prop="create_time"
label="注册日期">
</el-table-column>
<el-table-column
prop="city"
label="地址">
</el-table-column>
<el-table-column
prop="admin"
label="权限">
</el-table-column>
</el-table>
<div class="block">
<el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:page-size="100"
layout="total, prev, pager, next"
:total="1000">
</el-pagination>
</div>


    </div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
     return{
name:'',
data: [],
num:0
}
},
methods: {
setCurrent(row) {
this.$refs.singleTable.setCurrentRow(row);
},
handleCurrentChange(val) {
this.currentRow = val;
},
handleSizeChange(val) {
console.log(`每页 ${val} 条`);
},
handleCurrentChange(val) {
console.log(`当前页: ${val}`);
this.num=(val-1)*13
console.log(this.num)
axios.get('https://elm.cangdu.org/admin/all?offset='+this.num+'&limit=13').then((res)=>{
// console.log(res.data)
this.data=res.data.data
// console.log(this.data.data)
})
},
     shouye(){
        this.$router.push({path:"/tou"})
      }
},

created(){
this.name=this.$route.params.username


},
mounted(){
axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=13').then((res)=>{
console.log(res.data.data)
this.data=res.data.data
console.log(this.data.data)
})
}
 
}
</script>

<style lang='scss'>
#box{
    width: 100%;
    height: 100%;
}
    .tou{
        width: 100%;
        height:60px;
        background: #eff2f7;
        display:flex;
        position: relative;
        .gl{
            width:93%;
            display: flex;
            li{
                flex: 1;
                
            }
            li:nth-of-type(1){
            padding-left: 15px;
            line-height: 60px;
            font-size: 12px;
            span:nth-of-type(3){
                color: #777;
            }
            }
        }
        .block-col-2{
             width:7%;
             padding-top:7px;
             margin-left:50px;
             img{
                width:100%;
                border-radius:100%;
             }
        }
    }
</style>
