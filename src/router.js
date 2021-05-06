import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import PostTable from '@/components/PostTable'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
   {
      path: '/post_table',
      name: 'PostTable',
      component: PostTable
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
