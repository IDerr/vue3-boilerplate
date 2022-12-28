import { createApp } from 'vue'
import router from './router';
import piniaStore from './store';

import './index.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(piniaStore)
app.mount('#app')
