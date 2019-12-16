import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import WareHouse from '../views/WareHouse.vue'
import Mine from '../views/Mine.vue'
import Player from '../views/Player.vue'

Vue.use(VueRouter)

//解决Navigating to current location ("/player") is not allowed问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/warehouse',
    component: WareHouse
  },
  {
    path: '/mine',
    component: Mine

  },
  {
    path: "/player",
    component: Player
  }
]

const router = new VueRouter({
  routes
})

export default router
