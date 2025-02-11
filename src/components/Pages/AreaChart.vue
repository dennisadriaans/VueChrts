<script lang="ts" setup>

import BaseArea from "./../Base/Area.vue";
import BaseAreaStacked from "./../Base/AreaStacked.vue";

import { CurveType } from "@unovis/ts";
import {
  AreaChartData1,
  AreaChartData2,
  AreaChartData3,
  categories1,
  categories2,
} from "./../../data/AreaChartData";

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
