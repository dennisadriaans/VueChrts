<template>
  <div class="flex flex-col">
    <template v-for="[key, value] in Object.entries(data)" :key="key">
      <div class="flex items-center mr-2 mt-2">
        <!-- <span class="w-3 h-3 rounded-full bg-[#10b981] mr-2"></span> -->
        <span class="font-semibold capitalize text-white/75">{{ key }}:</span>
      </div>
      <span class="font-normal">{{ value }}</span>
    </template>
  </div>
</template>

<script lang="ts" setup generic="T">
const props = defineProps<{
  data: T;
}>();
</script>
