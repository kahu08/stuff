import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Hello from '@/components/Hello'
import GMain from '@/views/layout/GMain'
// import ThumbnailProduct from '@/views/products/ThumbnailProduct'
import Products from '@/views/products/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shop',
      component: GMain,
      children: [
        {
          path: '/',
          name: 'GirlStuff',
          // Categories
          component: Hello
        },
        {
          path: '/categories/:id',
          name: 'Categories',
          // Categories
          component: Products
        },
        {
          path: '/products',
          name: 'GirlStuff',
          // Products All
          component: Products
        },
        {
          path: '/products/:id',
          name: 'GirlStuff',
          // Specific Product
          component: Products
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      ]
    }
  ]
})
