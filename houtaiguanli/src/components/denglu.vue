<template>
    <div class="box">
            <div class="logo">
                    <h2>elm 后台管理系统</h2>
                    <div class="inp">
                        <el-input v-model="txt" placeholder="用户名" v-focus="true"></el-input>
                        <el-input v-model="pass" placeholder="密码" type="password" ></el-input>
                         <el-button plain @click="open6">登录</el-button>
                                     <p class="wen">温馨提示：</p>
                               <p class="wen">未登录过的新用户，自动注册</p>
                            <p class="wen">注册过的用户可凭账号密码登录</p>
                    </div>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      txt: '',
      pass:''
    }
  },
   methods: {
      open6() {
        // 跳转路径
          this.$router.push({path:"/xia"})
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
   }
}
</script>
 
<style lang="scss">
*{
    padding: 0;
    margin: 0;
}
.box{
    background: #324057;
    width: 100%;
    position: relative;
    height: 730px;
    .logo{
        width: 25%;
        height: 350px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
h2{
    font-size: 30px;
    text-align: center;
    margin: 0 0 20px 0;
    color: white;
}
    }
.inp{
    background: white;
    height: 300px;
    border-radius: 12px;
    text-align: center;
    .el-input__inner{
        margin:25px 0 0 0;
        width: 90%;
    }
    .el-button{
      margin:25px 0 0 0;
        width: 90%;
        background: #4DB3FF;
        color: white;
    }
}
.wen{
  text-align: center;
  color: red;
  margin: 7px 0;
  font-size: 12px;
}
}
</style>
