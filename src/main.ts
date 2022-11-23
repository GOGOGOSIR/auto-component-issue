import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Button } from 'vant';
// 2. 引入组件样式
// import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Button);
app.mount('#app')
