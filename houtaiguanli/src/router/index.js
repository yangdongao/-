import Vue from 'vue'
import Router from 'vue-router'
//左边栏
import xia from '@/components/xiala'
//登录页面
import denglu from '@/components/denglu'
//首页
import tou from '@/components/tou'
//用户列表
import user from '@/components/user'
//商家列表
import merchant from '@/components/merchant'
//食品列表
import foodList from '@/components/foodList'
//订单列表 orderList 
import orderList from '@/components/orderList'
//管理员列表 adminList
import adminList from '@/components/adminList'

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/xia',
      name: 'xia',
      component: xia,
      children:[
        {
          path: '/tou',
          component: tou
        },
        {
          path: '/user',
          component: user
        },
        {
          path: '/merchant',
          component: merchant 
        },
        {
        path: '/foodList',
        component: foodList
      },
      {
        path: '/orderList',
        component: orderList
      },
      {
        path: '/adminList',
        component: adminList
      },
      ]
    },
  ]
})
