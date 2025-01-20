<script setup lang="ts" generic="T">
import { VisAxis, VisBulletLegend, VisGroupedBar, VisTooltip, VisXYContainer } from '@unovis/vue'

const props = defineProps<{
  data: T[]
  height: number,
  categories: {
    name: string
    color: string
  }[]
  yAxis: Array<(d: T) => T[keyof T]>
  xLabel: string
  yLabel: string
  xFormatter: (index: number) => string
  xTickCount: number
  barPadding?: number
  tooltipTriggers: any
}>()

const color = (d: T, i: number) => props.categories[i].color
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
        :color="color"
        :group-padding="0.5"
        :bar-padding="barPadding ?? 0"
        :rounded-corners="40"
        :grid-line="false"
        :domain-line="false"
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
    <div class="flex items center justify-end">
      <VisBulletLegend
        :items="categories"
      />
    </div>
  </div>
</template>
