import Vue from 'vue'
import Router from 'vue-router'
import Icecream from './components/icecream.vue'
import Cart from './components/cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Icecream',
      component: Icecream
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
