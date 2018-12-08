import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Blog from '@/views/Blog'
import Messages from '@/views/Messages'
import About from '@/views/About'
import Article from '@/views/Article'
import admin from '@/admin/admin'
import adminArticle from '@/admin/adminArticle'
import change from '@/admin/change'
import adminArticleList from '@/admin/adminArticleList'
import login from '@/admin/login'

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
    },

    {
      path: '/admin',
      name: 'Admin',
      component: admin,
      // redirect: '/admin/adminArticle',
      redirect: { name: 'adminArticle'},
      children: [
        { path: 'adminArticle', component: adminArticle, name: 'adminArticle'},
        { path: 'adminChange', component: change, name: 'adminChange'},
        { path: 'adminArticleList', component: adminArticleList, name: 'adminArticleList'},
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: login,
    }
  ]
})
