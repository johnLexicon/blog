import Vue from 'vue'
import VueRouter from 'vue-router'
import Previews from '../views/Previews.vue'
import BlogPost from '../views/BlogPost.vue'
import CreatePost from '../views/CreatePost.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Previews',
    component: Previews
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blogpost/:postId',
    name: 'BlogPost',
    component: BlogPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
