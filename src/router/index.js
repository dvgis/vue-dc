/*
 * @Author: Caven
 * @Date: 2020-03-19 22:24:00
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-04 08:56:44
 */
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views')
  }
]

const router = new VueRouter({
  routes
})

export default router
