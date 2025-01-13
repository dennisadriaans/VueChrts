<script lang="ts" setup generic="T">
const props = defineProps<{
  type?: string
  data: number[]
  radius: number
  labels: {
    name: string
    color: string
  }[]
}>()

</script>
<template>
    <BaseDonut
      v-bind="props"
      >
      <slot></slot>
    </BaseDonut>
</template>