import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import UpDataPwd from '@/components/UpDataPwd'
import Regist from '@/components/Regist'
import Revert from '@/components/Revert'
import Answer from '@/components/Answer'
import Drive from '@/components/Drive'
import Drive2 from '@/components/Drive2'
import Drive3 from '@/components/Drive3'
import Dot from '@/components/Dot'

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
      name: 'Index',
      component: Index
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
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer,
    },
    {
      path: '/drive',
      name: 'Drive',
      component: Drive,
    },
    {
      path: '/drive/drive2',
      name: 'Drive2',
      component: Drive2,
    },
    {
      path: '/drive/drive3',
      name: 'Drive3',
      component: Drive3,
    },
    {
      path: '/dot',
      name: 'Dot',
      component: Dot,
    }
  ]
})
