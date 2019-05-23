import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Magnifier from '@/components/magnifier/Magnifier'
import Resume from '@/components/resume/Resume'

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
    }
  ]
})
