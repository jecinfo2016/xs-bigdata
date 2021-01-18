import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home'),
          meta: { title: '首页' }
        }
      ],
    },
    {
      path: '/xsgis',
      component: Layout,
      redirect: 'xsgis',
      children: [
        {
          path: 'index',
          name: 'Xsgis',
          component: () => import('@/views/API/Xsgis'),
          meta: { title: '地图' }
        },
      ]
    },
    {
      path: '/epanet',
      component: Layout,
      redirect: 'epanet',
      children: [
        {
          path: 'index',
          name: 'Epanet',
          component: () => import('@/views/API/Epanet'),
          meta: { title: 'Epanet' }
        },
      ]
    },
    {
      path: '/documents',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Documents',
          component: () => import('@/views/API/Documents'),
          meta: { title: '开发文档' }
        },
      ]
    },
    {
      path: '/case',
      component: Layout,
      redirect: '/advantage/index1',
      name: 'Advantage',
      children: [
        {
          path: 'index',
          component: () => import('@/views/Advantage/index'),
          meta: { title: '成功案例' }
        },
      ]
    },
    {
      path: '/advantage',
      component: Layout,
      redirect: '/advantage/index1',
      name: 'Advantage',
      children: [
        {
          path: 'index2',
          component: () => import('@/views/Advantage/advantage'),
          meta: { title: '我们的优势' }
        }
      ]
    },
    // {
    //   path: '/api',
    //   component: Layout,
    //   redirect: 'api/xsgis',
    //   name: 'API',
    //   meta: { title: '开发支持' },
    //   children: [
    //     {
    //       path: 'xsgis',
    //       name: 'Xsgis',
    //       component: () => import('@/views/API/Xsgis'),
    //       meta: { title: '地图' }
    //     },
    //     {
    //       path: 'epanet',
    //       name: 'Epanet',
    //       component: () => import('@/views/API/Epanet'),
    //       meta: { title: 'Epanet' }
    //     },
    //     {
    //       path: 'documents',
    //       name: 'Documents',
    //       component: () => import('@/views/API/Documents'),
    //       meta: { title: '开发文档' }
    //     }
    //   ]
    // },
    // {
    //   path: '/advantage',
    //   component: Layout,
    //   redirect: '/advantage/index1',
    //   name: 'Advantage',
    //   meta: { title: '为什么选择我们' },
    //   children: [
    //     {
    //       path: 'index1',
    //       component: () => import('@/views/Advantage/index'),
    //       meta: { title: '成功案例' }
    //     },
    //     {
    //       path: 'index2',
    //       component: () => import('@/views/Advantage/advantage'),
    //       meta: { title: '我们的优势' }
    //     }
    //   ]
    // },
    {
      path: '/introduce',
      component: Layout,
      redirect: '',
      children: [
        {
          path: 'index',
          name: 'Introduce',
          component: () => import('@/views/Introduce'),
          meta: { title: '产品介绍' }
        }
      ]
    }
  ]
})
