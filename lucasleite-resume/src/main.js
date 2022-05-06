import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/global.css';

createApp(App).mount('#app');
App.use(router, store);
