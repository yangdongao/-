<template>
  <div class="shouye">
    <tou></tou>
    <!-- 这是首页内容 -->
    <div class="shouye">
      <h1>数据统计</h1>
    </div>
  </div>
</template>

<script>
// 这是引入的头部组件
import tou from '@/components/tou'
export default {
  components:{
    tou
  }
}
</script>

<style>
  .shouye{
    width:81%;
    background:#fff;
  }
</style>
