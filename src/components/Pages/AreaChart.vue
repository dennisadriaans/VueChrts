<script lang="ts" setup>
import { computed } from "vue";

import BaseArea from "./../Base/Area.vue";
import BaseAreaStacked from "./../Base/AreaStacked.vue";

import { CurveType } from "@unovis/ts";
import {
  AreaChartData1,
  AreaChartData2,
  AreaChartData3,
  type AreaChartItem1,
  type AreaChartItem2,
  categories1,
  categories2,
} from "./../../data/AreaChartData";

const generateTooltip1 = computed(() => (d: AreaChartItem1) => {
  return `<div class="flex flex-col">
  <div class="flex items-center mr-2 mt-2">
    <span class="w-3 h-3 rounded-full bg-[#3b82f6] mr-2"></span>
    <span class="font-semibold">Desktop:</span>
  </div>
  <span class="font-normal">${d.desktop}</span>
  <div class="flex items-center mr-2 mt-2">
    <span class="w-3 h-3 rounded-full bg-[#10b981] mr-2"></span>
    <span class="font-semibold">Mobile:</span>
  </div>
  <span class="font-normal">${d.mobile}</span>
</div>`;
});

const generateTooltip2 = computed(() => (d: AreaChartItem2) => {
  return `<div class="flex flex-col">
  <div class="flex items-center mr-2 mt-2">
    <span class="w-3 h-3 rounded-full bg-[#3b82f6] mr-2"></span>
    <span class="font-semibold">Temperature:</span>
  </div>
  <span class="font-normal">${d.hour}</span>
  <span class="font-normal">${d.temperature}</span>
</div>`;
});
</script>

<template>
  <div class="space-y-8 pb-24">
    <div class="space-y-4">
      <div class="mb-8 space-y-4">
        <h1 class="text-4xl font-bold">Area Chart</h1>
        <p class="text-lg font-medium text-white/50">
          Graph with lines connecting data points and shaded areas between the
          lines and the x-axis.
        </p>
      </div>
      <UCard>
        <template #header>
          <h2 class="text-xl text-white my-2 font-bold">
            Area Chart multiple lines
          </h2>
        </template>
        <BaseArea
          :data="AreaChartData1"
          :height="300"
          y-label="Number of visits"
          :categories="categories1"
          :display-props="['desktop', 'mobile']"
          :x-formatter="(i: number): string => `${AreaChartData1[i].date}`"
          :curve-type="CurveType.MonotoneX"
          :cross-hair-template="generateTooltip1"
        />
      </UCard>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-4">
        <UCard>
          <template #header>
            <h2 class="text-xl my-2 font-bold">Area Chart with single line</h2>
          </template>
          <BaseArea
            :data="AreaChartData2"
            :height="300"
            x-label="Time"
            y-label="Temperature"
            :categories="categories2"
            :display-props="['temperature']"
            :y-num-ticks="4"
            :x-num-ticks="7"
            :x-formatter="(i: number, idx: number): string => {
              return `${AreaChartData2[i].hour}`;
            }"
            :curve-type="CurveType.Basis"
            :cross-hair-template="generateTooltip2"
          />
        </UCard>
      </div>

      <div class="space-y-4">
        <UCard>
          <template #header>
            <h2 class="text-xl my-2 font-bold">Area Stacked Chart</h2>
          </template>
          <BaseAreaStacked :data="AreaChartData3" />
        </UCard>
      </div>
    </div>
  </div>
</template>
