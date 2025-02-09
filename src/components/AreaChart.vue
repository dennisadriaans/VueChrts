<script lang="ts" setup generic="T">
import type { BulletLegendItemInterface } from '@unovis/ts'
import Area from './Base/Area.vue'

const props = defineProps<{
  data: T[]
  height: number
  xLabel: string
  yLabel: string
  displayProps: string[]
  yNumTicks?: number
  xNumTicks?: number
  curveType?: CurveType
  categories: Record<string, BulletLegendItemInterface>
  xFormatter: (v: number) => string
  crossHairTemplate: (d: T) => string
}>()
</script>

<template>
  <Area
    v-bind="props"
  />
</template>
