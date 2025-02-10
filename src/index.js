
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import ui from '@nuxt/ui/vue-plugin'
import Index from './components/Index.vue';
import AreaBase from './components/Base/Area.vue';
import DonutChart from './components/DonutChart.vue';

import './assets/main.css'

export {
    Index,
    AreaBase,
    DonutChart,
}

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
    routes: [],
    history: createWebHistory(),
  });

app.use(ui)
app.use(router);

app.mount('#app')

export default {
    install(app) {
        app.components(Index.name, Index)
    }
}