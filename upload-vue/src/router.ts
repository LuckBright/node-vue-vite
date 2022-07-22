import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./components/*.vue')

const routes = Object.keys(pages).map((path) => {
// const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
// console.log(pages, name)
  return {
    path: '/',
    component: pages[path] // () => import('./components/*.vue')
  }
})

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR
      ? createMemoryHistory('/test/')
      : createWebHistory('/test/'),
    routes
  })
}