import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index1 from '@/components/Index1'
import Login from '@/components/Login'
import UpDataPwd from '@/components/UpDataPwd'
import Regist from '@/components/Regist'
import Revert from '@/components/Revert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index1',
      component: Index1
    },
    {
      path: '/Pwd',
      name: 'UpDataPwd',
      component: UpDataPwd
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/revert',
      name: 'Revert',
      component: Revert
    }
  ]
})
