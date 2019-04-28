<template>
    <div id="box">
              <!-- 开始 -->
    <div class="tou">
        <ul class="gl">
            <li>
                <span @click="shouye">首页 /</span>
                <span>数据管理 /</span>
                <span>订单列表</span>
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
<el-table-column type="expand">
<template slot-scope="props">
<el-form label-position="left" inline class="demo-table-expand">
<el-form-item label="用户名">
<span>{{ props.row.name }}</span>
</el-form-item>
<el-form-item label="店铺名称">
<span>{{ props.row.address }}</span>
</el-form-item>
<el-form-item label="收货地址">
<span>{{ props.row.item_id }}</span>
</el-form-item>
<el-form-item label="店铺ID">
<span>{{ props.row.id }}</span>
</el-form-item>
<el-form-item label="店铺地址">
<span>{{ props.row.phone }}</span>
</el-form-item>
</el-form>
</template>
</el-table-column>
<el-table-column
label="订单id"
prop="id" >
</el-table-column>
<el-table-column
label="总价格"
prop="total_amount">
</el-table-column>
<el-table-column
label="订单状态"
prop="status_bar.title">
</el-table-column>
</el-table>
<div class="block">
<el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page.sync="currentPage1"
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
axios.get('https://elm.cangdu.org/bos/orders?offset='+this.num+'&limit=13&restaurant_id=undefined').then((res)=>{
console.log(res.data)
this.data=res.data
console.log(this.data)
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
axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=13&restaurant_id=undefined').then((res)=>{
console.log(res.data)
this.data=res.data
console.log(this.data)
})
}

}
</script>

<style lang='scss'>

#box{
    width: 100%;
    // height: 100%;
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
