import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Dashboard from '../views/dashboard.vue'

import DashboardLayout from "@/components/HelloWorld.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },

  {
    path: "/app",
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
