import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
console.log(app.config)
app.config.globalProperties.$api = '/api'

// 自动获取元素焦点
app.directive('focus', {
  mounted: (el) => {
    el && el.focus()
  }
})

app.mount('#app')
