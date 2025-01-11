<script setup lang="ts">
import { VisDonut, VisSingleContainer } from '@unovis/vue'

const props = defineProps<{
  type: string
  label: string
  data: number[]
  colors: string[]
}>()
const value = (d: number) => d

const isHalf = props.type === 'half'
</script>

<template>
  <div class="flex items-center justify-center">
    <VisSingleContainer
      :class="isHalf ? 'mt-24' : ''"
      :data="data" :height="isHalf ? 300 : 200" :margin="{
      }"
    >
      <VisDonut
        :show-background="false"
        :value="value"
        :corner-radius="5"
        :color="props.colors"
        :angle-range="isHalf ? [-1.5707963267948966, 1.5707963267948966] : []"
      />
    </VisSingleContainer>

    <div class="absolute text-center">
      <div class="font-semibold">
        {{ label }}
      </div>
      <div class="text-gray-500">
        2 seconds ago
      </div>
    </div>
  </div>
</template>
