import AreaChart from './components/AreaChart.vue';
import DonutChart from './components/DonutChart.vue';

export {
    AreaChart,
    DonutChart
}

export default {
    install(app: any) {
        app.components(AreaChart.name, AreaChart);
        app.components(DonutChart.name, DonutChart);
    }
}