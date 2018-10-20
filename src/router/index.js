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
import Dot from '@/components/Dot'
import LongLoad from '@/components/LongLoad'
import User from '@/components/User'
import AnswerDetails from '@/components/AnswerDetails'
import Retrieve from '@/components/Retrieve'
import CarDetail from '@/components/CarDetail'
import Questions from '@/components/Questions'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/dot',
      name: 'Dot',
      component: Dot,
    },
    {
      path: '/retrieve',
      name: 'Retrieve',
      component: Retrieve,
    },
    {
      path: '/long',
      name: 'LongLoad',
      component: LongLoad,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '/det',
      name: 'AnswerDetails',
      component: AnswerDetails,
    },
    {
      path: '/revert/car',
      name: 'CarDetail',
      component: CarDetail,
    },
    {
      path: '/answer/question',
      name: 'Questions',
      component: Questions,
    },
  ]
})
