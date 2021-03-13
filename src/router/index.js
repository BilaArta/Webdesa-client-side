import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path : `/${process.env.VUE_APP_BASE_ROUTE}`,
    component: () => import('../components/Container'),
    children : [
      {
        path: '/',
        name: 'Home',
        component: () => import('@Components/User/Home')
      },
      {
        path: '/berita',
        name: 'berita',
        component: () => import('../views/Berita')
      },
      {
        path: '/surat',
        name: 'Login Penduduk',
        component: () => import('../views/LoginWarga')
      },
      {
        path: '/surat/cetak/:id/:nama',
        name: 'Cetak surat',
        component: () => import('../views/Surat')
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/Home')
      },
      {
        path: '/admin/:id',
        name: 'Dashboard Admin',
        component: () => import( '../views/Admin.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: null, 
  routes
})

export default router
