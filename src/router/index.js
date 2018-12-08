import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Blog from '@/views/Blog'
import Messages from '@/views/Messages'
import About from '@/views/About'
import Article from '@/views/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },

    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
