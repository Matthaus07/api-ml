import Vue from 'vue'
import VueRouter from 'vue-router'
import ProdutoCategorias from '../views/ProdutoCategorias'
import Categorias from '../views/Categorias'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Produto',
    component: ProdutoCategorias
  },

  {
    path: "/categorias",
    name: 'Categorias',
    component: Categorias
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
