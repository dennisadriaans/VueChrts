<script lang="ts" setup generic="T">
import type { BulletLegendItemInterface } from '@unovis/ts'
import Area from './Base/Area.vue'

const props = defineProps<{
  data: T[]
  height: number
  categories: Record<string, BulletLegendItemInterface>
  xLabel: string
  yLabel: string
  displayProps: string[]
  xFormatter: (v: number) => string
  crossHairTemplate: (d: T) => string
}>()
</script>

<template>
  <Area
    v-bind="props"
  />
</template>
