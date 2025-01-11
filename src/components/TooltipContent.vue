<script lang="ts" setup>
defineProps<{
  d: any
}>()
</script>

<template>
  <div style="display: inline-flex; align-items: center; margin-right: 10px; margin-top: 10px;">
    <span style="background-color: #3b82f6; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px;" />
    <span style="font-weight: 600">Desktop:</span>
  </div>
  <span style="font-weight: 400">{{ d.desktop }}</span>
  <div style="display: inline-flex; align-items: center; margin-right: 10px; margin-top: 10px;">
    <span style="background-color: #10b981; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px;" />
    <span style="font-weight: 600">Mobile:</span>
  </div>
  <span style="font-weight: 400">{{ d.mobile }}</span>
</template>
