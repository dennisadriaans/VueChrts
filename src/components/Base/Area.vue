<script setup lang="ts" generic="T">
import type { BulletLegendItemInterface, NumericAccessor } from '@unovis/ts'
import { CurveType, Position } from '@unovis/ts'
import { VisArea, VisAxis, VisBulletLegend, VisCrosshair, VisLine, VisTooltip, VisXYContainer } from '@unovis/vue'

const props = defineProps<{
  data: T[]
  xLabel: string
  yLabel: string
  categories: Record<string, BulletLegendItemInterface>
  displayProps: string[]
  xFormatter: (v: number) => string
  crossHairTemplate: (d: T) => string
  curveType?: CurveType
  yNumTicks?: number
  xNumTicks?: number
}>()

const colors = Object.values(props.categories).map(c => c.color)

function accessors(id: string): { y: NumericAccessor<T>, color: string } {
  return {
    y: (d: T) => Number(d[id as keyof typeof d]),
    color: props.categories[id]?.color ?? '#3b82f6',
  }
}

const svgDefs = colors.map((color, index) => `
  <linearGradient id="gradient${index}-${color}" gradientTransform="rotate(90)">
    <stop offset="0%" stop-color="${color}" stop-opacity="1" />
    <stop offset="100%" stop-color="${color}" stop-opacity="0" />
  </linearGradient>
`).join('')
</script>

<template>
  <div class="space-y-2">
    <VisBulletLegend
      :items="Object.values(categories)"
    />
    <VisXYContainer
      :data="data"
      :height="275"
      :svg-defs="svgDefs"
      class=""
    >
      <VisTooltip
        :follow-cursor="false"
        :horizontal-placement="Position.Right"
        :vertical-placement="Position.Top"
      />
      <template
        v-for="(i, iKey) in props.displayProps"
        :key="iKey"
      >
        <VisArea
          :x="(_: T, i: number) => i"
          v-bind="accessors(i)"
          :color="`url(#gradient${iKey}-${colors[iKey]})`"
          :opacity="0.5"
          :curve-type="curveType ?? CurveType.MonotoneX"
        />
        <VisLine
          :x="(_: T, i: number) => i"
          :y="(d: T) => d[i as keyof typeof d]"
          :color="colors[iKey]"
          :curve-type="curveType ?? CurveType.MonotoneX"
        />
      </template>

      <VisAxis
        type="x"
        :grid-line="false"
        :domain-line="false"
        :tick-format="xFormatter"
        :num-ticks="xNumTicks ?? 4"
      />
      <VisAxis
        type="y"
        :num-ticks="yNumTicks ?? 4"
        :domain-line="false"
        :label="yLabel"
      />
      <VisCrosshair
        color="#666"
        :template="crossHairTemplate"
      />
    </VisXYContainer>
  </div>
</template>
