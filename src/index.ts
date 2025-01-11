import AreaChart from './components/AreaChart.vue';

export {
    AreaChart
}

export default {
    install(app: any) {
        app.components(AreaChart.name, AreaChart);
    }
}