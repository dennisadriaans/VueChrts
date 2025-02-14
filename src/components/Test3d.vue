<script lang="ts" setup>

import NextArea from './Next/Area.vue'

const data = [
  { month: "Jan", semiAnalysis: 2800, pragmaticEngineer: 2200 },
  { month: "Feb", semiAnalysis: 2900, pragmaticEngineer: 2100 },
  { month: "Mar", semiAnalysis: 3300, pragmaticEngineer: 2150 },
  { month: "Apr", semiAnalysis: 3400, pragmaticEngineer: 2100 },
  { month: "May", semiAnalysis: 3400, pragmaticEngineer: 1900 },
  { month: "Jun", semiAnalysis: 3200, pragmaticEngineer: 2000 },
  { month: "Jul", semiAnalysis: 3500, pragmaticEngineer: 2100 },
  { month: "Aug", semiAnalysis: 3000, pragmaticEngineer: 2200 },
  { month: "Sep", semiAnalysis: 2900, pragmaticEngineer: 2500 },
  { month: "Oct", semiAnalysis: 3000, pragmaticEngineer: 2600 },
  { month: "Nov", semiAnalysis: 3100, pragmaticEngineer: 3800 },
  { month: "Dec", semiAnalysis: 3200, pragmaticEngineer: 3600 },
];

</script>
<template>
  <div>
    <NextArea :data="data"></NextArea>
  </div>
</template>
