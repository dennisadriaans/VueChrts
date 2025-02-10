<script setup lang="ts">
import { VisXYContainer, VisAxis, VisArea, VisBulletLegend } from '@unovis/vue'
import { CurveType } from '@unovis/ts'

const props = defineProps<{
  data: any
}>()
const x = (d) => {
  return Number.parseInt(d.time)
}
const y = [
  d => d.firstTime,
  d => d.returning
]
</script>

<template>
  <div class="space-y-2">
    <VisXYContainer
      :data="data"
      :height="300"
    >
      <VisArea
        :x="x"
        :y="y"
        :color="['#F78800', '#FCE8CE']"
        :curve-type="CurveType.Linear"
      />
      <VisAxis
        type="x"
        label="Time"
        :num-ticks="12"
        :grid-line="false"
        :domain-line="false"
      />
      <VisAxis
        type="y"
        label="Number of visitors"
        :num-ticks="3"
      />
    </VisXYContainer>
    <div class="flex items center justify-end">
      <VisBulletLegend
        class="mb-4"
        :items="[
          {
            name: 'New',
            color: '#F78800'
          },
          {
            name: 'Returning',
            color: '#FCE8CE'
          }
        ]"
      />
    </div>
  </div>
</template>
