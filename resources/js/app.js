import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';

const app = createApp({});

app.component('App', App);

app.mount('#app');


import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
