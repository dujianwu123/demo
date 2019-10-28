import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Magnifier from '@/components/magnifier/Magnifier'
import Resume from '@/components/resume/Resume'
import Test from '@/components/test_demo/Test'
import ShopingCart from '@/components/test_demo/components/ShopingCart'
import Kinput from '@/components/test_demo/components/Kinput'
import TestCar from '@/components/test_demo/components/ShopingCart2'
import XiaLa from '@/components/xiala/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/magnifier',
      name: 'Magnifier',
      component: Magnifier
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children: [
        {
          name: 'ShopingCart',
          path: 'shopingcart',
          component: ShopingCart
        }
      ]
    },
    {
      path: '/kinput',
      name: 'Kinput',
      component: Kinput
    },
    {
      path: '/testCar',
      name: 'TestCar',
      component: TestCar
    },
    {
      path: '/xiala',
      name: 'XiaLa',
      component: XiaLa
    }
  ]
})
