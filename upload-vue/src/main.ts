import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
console.log(app.config)
app.config.globalProperties.$api = '/api'
app.mount('#app')
