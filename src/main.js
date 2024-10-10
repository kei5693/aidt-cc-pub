import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/contents.scss'

// admin 에서 지정한 color 값 rgb코드로 받아야 함
document.documentElement.style.setProperty("--primary-color", "25, 103, 210");
createApp(App).use(store).use(router).mount('#app')
