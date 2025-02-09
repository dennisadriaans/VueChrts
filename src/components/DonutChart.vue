<script lang="ts" setup generic="T">
import Donut from './Base/Donut.vue'

const props = defineProps<{
  type?: string
  data: number[]
  radius: number
  height: number
  labels: {
    name: string
    color: string
  }[]
}>()

</script>
<template>
    <Donut
      v-bind="props"
      >
        <slot></slot>
    </Donut>
</template>