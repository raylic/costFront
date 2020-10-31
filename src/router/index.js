import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '主页', icon: 'dashboard' },
    name: '主页',
  }
]

const createRouter = () => new Router({
  // mode: 'history',
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router