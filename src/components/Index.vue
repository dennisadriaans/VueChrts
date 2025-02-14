<script lang="ts" setup>
import { computed } from 'vue'
import AreaChartPage from "./Pages/AreaChart.vue";
import Test3d from "./Test3d.vue";
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()


const isDark = computed(() => colorMode.value === 'dark')

function setColorMode() {
  colorMode.value = isDark.value ? 'light' : 'dark'
}
</script>
<template>
  <div class="max-w-7xl mx-auto py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
      <img width="40" src="https://nuxterror.com/logo.svg" alt="" />
      <h6 class="text-xl font-bold">Nuxt Charts</h6>
    </div>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="setColorMode"
      class="cursor-pointer"
    />
    </div>
  </div>
  <div class="max-w-7xl mx-auto py-4">
    <Test3d></Test3d>
  </div>
  <div class="max-w-7xl mx-auto py-4">
    <AreaChartPage></AreaChartPage>
  </div>
</template>
