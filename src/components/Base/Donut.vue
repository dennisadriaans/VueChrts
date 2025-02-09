<script setup lang="ts">
import { Donut } from '@unovis/ts'
import { VisBulletLegend, VisDonut, VisSingleContainer, VisTooltip } from '@unovis/vue'

const props = defineProps<{
  type?: string
  data: number[]
  height: number
  radius: number
  labels: {
    name: string
    color: string
  }[]
}>()

const value = (d: number) => d

const isHalf = props.type === 'half'
</script>

<template>
  <div class="flex items-center justify-center">
    <VisSingleContainer
      :class="isHalf ? 'mt-24' : ''"
      :data="data"
      :height="height"
      :margin="{}"
    >
      <VisTooltip
        :horizontal-shift="20"
        :vertical-shift="20"
        :triggers="{
          [Donut.selectors.segment]: (d) => {
            console.log()

            return `<div class='flex items-center'><div class='w-2 h-2 rounded-full mr-2' style='background-color: ${labels[d.index].color} ;'></div>
        <div>${d.data}</div>
      </vistooltip>
    </vissinglecontainer>
  </div>`
          },
        }"
      />

      <VisDonut
        :value="value"
        :corner-radius="radius"
        :color="props.labels.map((l) => l.color)"
        :angle-range="isHalf ? [-1.5707963267948966, 1.5707963267948966] : []"
      />
    </VisSingleContainer>

    <slot />
  </div>

  <div class="flex items-center justify-center mt-4">
    <VisBulletLegend :items="labels" />
  </div>
</template>
