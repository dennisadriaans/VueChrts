<script lang="ts" setup generic="T">
import { GroupedBar } from '@unovis/ts'

const props = defineProps<{
  data: T[]
  colorMap: Record<string, string>
  xAxisKey: keyof T
  yAxisKeys: string[]
  xLabel: string
  yLabel: string
  xFormatter: (v: string) => string
  xTickCount?: number
  generateChartTooltip: (d: T) => string
}>()

const Mapped = props.yAxisKeys.map((key: string) => (d: T) => d[key as keyof typeof d])

const categories = Object.entries(props.colorMap).map(([n, c]) => ({
  name: n,
  color: c,
}))

const triggers = {
  [GroupedBar.selectors.bar]: props.generateChartTooltip,
}
</script>

<template>
  <BaseBar
    :data="data"
    :categories="categories"
    :x-label="xLabel"
    :y-label="yLabel"
    :x-axis="(d: T) => d[props.xAxisKey]"
    :y-axis="Mapped"
    :x-formatter="xFormatter"
    :x-tick-count="xTickCount ?? data.length"
    :tooltip-triggers="triggers"
  />
</template>
