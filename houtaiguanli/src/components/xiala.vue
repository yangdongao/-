<template>
  <div id="app">
     <el-row id="tac">
  <el-col :span="8">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="2" @click="sy"><i class="el-icon-menu"></i>首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
          <el-menu-item index="1-1" @click="user">用户列表</el-menu-item>
          <el-menu-item index="1-2" @click="merchant">商家列表</el-menu-item>
            <el-menu-item index="1-3" @click="foodList">食品列表</el-menu-item>
          <el-menu-item index="1-4" @click="orderList">订单列表</el-menu-item>
            <el-menu-item index="1-5" @click="adminList">管理员列表</el-menu-item>
      </el-submenu>
          <el-submenu index="2">
        <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
          <el-menu-item index="1-1">添加商铺</el-menu-item>
          <el-menu-item index="1-2">添加商品</el-menu-item>
      </el-submenu>

          <el-submenu index="3">
        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
          <el-menu-item index="1-1">用户分布</el-menu-item>
      </el-submenu>

          <el-submenu index="4">
        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
          <el-menu-item index="1-1">文本编辑</el-menu-item>
      </el-submenu>

          <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <el-menu-item index="1-1">管理员设置</el-menu-item>
      </el-submenu>

          <el-submenu index="6">
        <template slot="title"><i class="el-icon-warning"></i>说明</template>
          <el-menu-item index="1-1">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
            // 首页
      sy(){
        this.$router.push({path:"/tou"})
      },
          // 用户列表
         user(){
        this.$router.push({path:"/user"})
      },
       // 商家列表
          merchant(){
        this.$router.push({path:"/merchant"})
      },
       // 食品列表
           foodList(){
        this.$router.push({path:"/foodList"})
      },
       // 订单列表
          orderList(){
        this.$router.push({path:"/orderList"})
      },
         // 管理员列表
          adminList(){
        this.$router.push({path:"/adminList"})
      },
    }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding: 0;
  list-style:none;
}
#app{
  display:flex;
  width: 100%;
      .el-row{
  height: 753px;
  .el-col-8{
  height: 753px;
width:300px;
  background:#324057;
  }
  .el-menu{
  background:#324057;
  }
  .el-submenu__title i{
    color:#fff;
  }
  .el-submenu__title{
    color:#fff;
  }
}

}

</style>
