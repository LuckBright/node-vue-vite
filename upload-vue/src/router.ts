import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/HelloWorld.vue'
import { getChallengens } from './getChallengen'
const { challengenRouter } = getChallengens()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...challengenRouter
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router