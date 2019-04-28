<template>
<!-- 这是头部 -->
<div id="box">
    <div class="tou">

        <ul class="tou-ul">
            <li>首页</li>
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

<div class="cen">
  <p class="shu">数据统计</p>
  <div class="bq">
<el-tag>当日数据：</el-tag>
<el-tag type="info"><b>{{this.adduser}}</b>新增用户</el-tag>
<el-tag type="info"><b>{{this.addOrder}}</b>新增订单</el-tag>
<el-tag type="info"><b>{{this.addAdministrators}}</b>新增管理员</el-tag>
  </div>
  <div class="bqq">
<el-tag>总数据：</el-tag>
<el-tag type="info"><b>{{this.register}}</b>注册用户</el-tag>
<el-tag type="info"><b>{{this.order}}</b>订单</el-tag>
<el-tag type="info"><b>{{ this.addAdministrators }}</b>管理员</el-tag>
  </div>
</div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return{
      //新增用户
      adduser: "",
    //新增订单
addOrder: "",
//注册用户
register: "",
//新增管理员
addAdministrators: "",
//订单
order: "",
//管理员
Administrators: ""
      }
    },
mounted() {
//新增用户
this.axios
.get("https://elm.cangdu.org/statis/user/2019-04-27/count")
.then(res => {
console.log(res.data);
this.adduser = res.data.count;
});
//注册用户
this.axios.get("https://elm.cangdu.org/v1/users/count").then(res => {
console.log(res.data);
this.register = res.data.count;
});
//新增管理员
this.axios
.get("https://elm.cangdu.org/statis/admin/2019-04-27/count")
.then(res => {
this.addAdministrators = res.data.count;
});
//订单
this.axios.get("https://elm.cangdu.org/statis/order/2019-04-27/count").then(res => {
this.addOrder = res.data.count;
});
//
this.axios.get("https://elm.cangdu.org/bos/orders/count").then(res => {
this.order = res.data.count;
});
//订单
this.axios.get("https://elm.cangdu.org/bos/orders/count").then(res => {
this.order = res.data.count;
});
//
this.axios.get("https://elm.cangdu.org/bos/orders/count").then(res => {
this.order = res.data.count;
});
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
        height:56px;
        line-height:56px;
        text-align:center;
        background: #eff2f7;
        display:flex;
        justify-content:space-between;
        position: relative;
        .tou-ul{
             width:100%;
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
    .cen{
width: 100%;
     .shu{
       width: 100%;
       text-align: center;
       font-size: 30px;
       padding: 15px 0;
     }


     .bq{
       width: 100%;
       .el-tag{
          line-height: 35px;
         width: 15%;
         height: 40px;
         margin: 7px 7px;
         text-align: center;
         font-size: 13px;
       }
       .el-tag:nth-of-type(1){
         margin: 0 10px 0 30px;
         color: white;
         background: #FF9800;
         text-align: center;
         font-size: 15px;
       }
       b{
          color: #000;
         font-size: 20px;
       }
     }
       .bqq{
       width: 100%;
       .el-tag{
         width: 15%;
         height: 40px;
         margin: 7px 7px;
          line-height: 35px;
          text-align: center;
         font-size: 13px;
       }
          .el-tag:nth-of-type(1){
             margin: 0 10px 0 30px;
          color: white;
           background: #20A0FF;
            text-align: center;
           font-size: 15px; 
       }
       b{
          color: #000;
         font-size: 20px;
       }
     }
    }
  
</style>
