import { createRouter, createWebHistory } from 'vue-router'

import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },

    {
      path: '/products',
      name: 'Products',
      component: Products
    },

    {
      path: '/product-details/:product',
      name: 'ProductDetails',
      component: ProductDetails
    },

    {
      path: '/:pathMatch(.*)*',
      beforeEnter(to, from, next) {
        next({ path: '/' })
      }
    }
  ]
  
})

export default router
