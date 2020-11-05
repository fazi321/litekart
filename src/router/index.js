import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue'
import LiveProject from '../views/LiveProject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/litekart-story',
    name: 'Story',
    component: Story
  },
  {
    path: '/live-projects',
    name: 'Live',
    component: LiveProject
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
