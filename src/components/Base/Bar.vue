<script setup lang="ts" generic="T">
import { VisAxis, VisBulletLegend, VisGroupedBar, VisTooltip, VisXYContainer } from '@unovis/vue'

const props = defineProps<{
  data: T[]
  categories: {
    name: string
    color: string
  }[]
  xAxis: (d: T) => T[keyof T]
  yAxis: Array<(d: T) => T[keyof T]>
  xLabel: string
  yLabel: string
  xFormatter: (v: string) => string
  xTickCount: number
  barPadding?: number
  tooltipTriggers: any
}>()

const color = (_: T, i: number) => props.categories[i].color
</script>

<template>
  <VisBulletLegend
    :items="categories"
  />
  <VisXYContainer
    :height="500"
  >
    <VisTooltip :triggers="tooltipTriggers" />
    <VisGroupedBar
      :data="data"
      :x="xAxis"
      :y="yAxis"
      :color="color"
      :bar-padding="barPadding ?? 0"
    />
    <VisAxis
      type="x"
      :label="xLabel"
      :grid-line="false"
      :domain-line="false"
      :num-ticks="xTickCount ?? data.length"
      :tick-format="xFormatter"
    />
    <VisAxis
      type="y"
      :grid-line="true"
      :domain-line="false"
      :tick-format="(value: number) => (value / 10 ** 6).toFixed(1)"
      :label="yLabel"
    />
  </VisXYContainer>
</template>
