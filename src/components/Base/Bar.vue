<script setup lang="ts" generic="T">
import { VisAxis, VisBulletLegend, VisGroupedBar, VisTooltip, VisXYContainer } from '@unovis/vue'

const props = defineProps<{
  data: T[]
  height: number
  categories: {
    name: string
    color: string
  }[]
  yAxis: Array<(d: T) => T[keyof T]>
  xLabel: string
  yLabel: string
  xFormatter: (index: number) => string
  barPadding?: number
  tooltipTriggers: any
  yNumTicks?: number
  xNumTicks?: number
}>()

const color = (_: T, i: number) => props.categories[i].color
</script>

<template>
  <div class="space-y-2">
    <VisXYContainer
      :height="height"
    >
      <VisTooltip :triggers="tooltipTriggers" />
      <VisGroupedBar
        :data="data"
        :x="(_: T, i: number) => i"
        :y="yAxis"
        :grid-line="false"
        :domain-line="false"
        :color="color"
        :rounded-corners="40"
        :num-ticks="yNumTicks ?? 4"
        :group-padding="0.5"
        :bar-padding="barPadding ?? 0"
      />
      <VisAxis
        type="x"
        :label="xLabel"
        :grid-line="false"
        :domain-line="false"
        :num-ticks="xNumTicks ?? 4"
        :tick-format="xFormatter"
      />
      <VisAxis
        type="y"
        :label="yLabel"
        :grid-line="true"
        :domain-line="false"
        :tick-format="(value: number) => (value / 10 ** 6).toFixed(1)"
      />
    </VisXYContainer>
    <div class="flex items center justify-end">
      <VisBulletLegend
        :items="categories"
      />
    </div>
  </div>
</template>
