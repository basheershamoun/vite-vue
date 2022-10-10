import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router/index';

import './style.css';

// createApp(App)
//     .use(router)
//     .mount('#app');



const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(router);
app.mount("#app");
