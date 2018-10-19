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
import Questions from '@/components/Questions'
import Retrieve from '@/components/Retrieve'
import Dic from '@/components/Dic'
import CarDetail from '@/components/CarDetail'

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
      path: '/wen',
      name: 'Questions',
      component: Questions,
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
      path: '/dic',
      name: 'Dic',
      component: Dic,
    },
    {
      path: '/revert/car',
      name: 'CarDetail',
      component: CarDetail,
    },
  ]
})
