
import { createApp } from 'vue'

import AreaChart from './components/AreaChart.vue';
import DonutChart from './components/DonutChart.vue';

export {
    AreaChart,
    DonutChart,
}

import App from './App.vue'
const app = createApp(App)
app.mount('#app')

export default {
    install(app: any) {
        app.components(AreaChart.name, AreaChart);
        app.components(DonutChart.name, DonutChart);
    }
}