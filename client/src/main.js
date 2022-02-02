import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './axios';

store.dispatch('setUser', localStorage.getItem('auth')).then(() => {
     createApp(App).use(store).use(router).mount('#app');
});
