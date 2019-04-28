<template>
    <div id="box">
              <!-- 开始 -->
    <div class="tou">
        <ul class="gl">
            <li>
                <span @click="shouye">首页 /</span>
                <span>数据管理 /</span>
                <span>食品列表</span>
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

</el-table>
<el-table :data="foodlist" style="width: 100%">
<el-table-column type="expand">
<template slot-scope="props">
<el-form label-position="left" inline class="demo-table-expand">
<el-form-item label="食品名称">
<span>{{ props.row.name }}</span>
</el-form-item>
<el-form-item label="食品ID">
<span>{{ props.row.item_id}}</span>
</el-form-item>
<el-form-item label="食品介绍">
<span></span>
</el-form-item>
<el-form-item label="食品评分">
<span>{{props.row.rating}}</span>
</el-form-item>
<el-form-item label="月销量">
<span>{{ props.row.month_sales}}</span>
</el-form-item>
<el-form-item label="餐馆名称">
<span></span>
</el-form-item>
<el-form-item label="餐馆ID">
<span>{{ props.row.restaurant_id}}</span>
</el-form-item>
<el-form-item label="餐馆地址">
<span></span>
</el-form-item>
<el-form-item label="食品分类">
<span></span>
</el-form-item>
</el-form>
</template>
</el-table-column>
<el-table-column label="店铺名称" prop="name"> </el-table-column>
<el-table-column label="店铺介绍" prop=""></el-table-column>
<el-table-column label="评分" prop="rating"> </el-table-column>
<el-table-column label="操作" prop="desc">
<div slot-scope="scope">
<el-button size="mini" >编辑</el-button>
<el-button size="mini" type="danger" >删除</el-button>
</div>
</el-table-column>
</el-table>
<el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page.sync="currentPage1"
:page-size="100"
layout="total, prev, pager, next"
:total="1000">
</el-pagination>

    </div>
</template>

<script>
import axios from 'axios'
export default {
 methods: {
         shouye(){
        this.$router.push({path:"/tou"})
      }
 },
 data() {
return {
foodlist: [],
name:'',
data: [],
num:0
};
},
mounted(){
axios
.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=11&restaurant_id=undefined")
.then(res => {
console.log(res.data)
this.foodlist = res.data;
});
},


 methods: {
         shouye(){
        this.$router.push({path:"/tou"})
      },
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
this.num=(val-1)*10
console.log(this.num)
axios.get('https://elm.cangdu.org/shopping/v2/foods?offset='+this.num+'&limit=11&restaurant_id=undefined').then((res)=>{
console.log(res.data)
this.foodlist=res.data
console.log(this.data)
})
}
 }
}
</script>

<style lang='scss'>

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
