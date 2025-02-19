<script setup lang="ts" generic="T">
import { computed, createApp } from "vue";
import type { BulletLegendItemInterface, NumericAccessor } from "@unovis/ts";
import { CurveType, Position } from "@unovis/ts";
import {
  VisArea,
  VisAxis,
  VisBulletLegend,
  VisCrosshair,
  VisLine,
  VisTooltip,
  VisXYContainer,
} from "@unovis/vue";
import { AreaChartItem1 } from "../../data/AreaChartData";

import Tooltip from "./Tooltip.vue";

const props = defineProps<{
  data: T[];
  height: number;
  xLabel?: string;
  yLabel?: string;
  categories: Record<string, BulletLegendItemInterface>;
  displayProps: string[];
  xFormatter: (i: number, idx: number) => string;
  yFormatter?: (i: number, idx: number) => string;
  curveType?: CurveType;
  yNumTicks?: number;
  xNumTicks?: number;
}>();

const generateTooltip1 = computed(() => (d: AreaChartItem1) => {
  const app = createApp(Tooltip, {
    data: d,
  });

  const container = document.createElement("div");
  app.mount(container);

  const html = container.innerHTML;
  app.unmount();

  return html;
});

const colors = Object.values(props.categories).map((c) => c.color);

function accessors(id: string): { y: NumericAccessor<T>; color: string } {
  return {
    y: (d: T) => Number(d[id as keyof typeof d]),
    color: props.categories[id]?.color ?? "#3b82f6",
  };
}

const svgDefs = colors
  .map(
    (color, index) => `
  <linearGradient id="gradient${index}-${color}" gradientTransform="rotate(90)">
    <stop offset="0%" stop-color="${color}" stop-opacity="1" />
    <stop offset="100%" stop-color="${color}" stop-opacity="0" />
  </linearGradient>
`
  )
  .join("");
</script>

<template>
  <div class="space-y-4">
    <VisXYContainer :data="data" :height="height" :svg-defs="svgDefs">
      <VisTooltip
        :horizontal-placement="Position.Right"
        :vertical-placement="Position.Top"
      />
      <template v-for="(i, iKey) in props.displayProps" :key="iKey">
        <VisArea
          :x="(_: T, i: number) => i"
          v-bind="accessors(i)"
          :color="`url(#gradient${iKey}-${colors[iKey]})`"
          :opacity="0.5"
          :curve-type="curveType ?? CurveType.MonotoneX"
        />
        <VisLine
          :x="(_: any, i: number) => i"
          :y="(d: T) => d[i as keyof typeof d]"
          :color="colors[iKey]"
          :curve-type="curveType ?? CurveType.MonotoneX"
        />
      </template>

      <VisAxis
        type="x"
        :tick-format="xFormatter"
        :num-ticks="xNumTicks ?? 4"
        :grid-line="false"
        :label="xLabel"
        :label-margin="8"
      />
      <VisAxis
        type="y"
        :num-ticks="yNumTicks ?? 4"
        :tick-format="yFormatter"
        :domain-line="false"
        :grid-line="true"
        :label="yLabel"
        :style="{
          gridLine: {
            stroke: '#f00',
          },
        }"
      />
      <VisCrosshair color="#666" :template="generateTooltip1" />
    </VisXYContainer>
    <div class="flex items center justify-end">
      <VisBulletLegend :items="Object.values(categories)" />
    </div>
  </div>
</template>
