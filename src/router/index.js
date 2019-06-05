import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Magnifier from '@/components/magnifier/Magnifier'
import Resume from '@/components/resume/Resume'
import Test from '@/components/test_demo/Test'
import ShopingCart from '@/components/test_demo/components/ShopingCart'
import Kinput from '@/components/test_demo/components/Kinput'

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
    }
  ]
})
