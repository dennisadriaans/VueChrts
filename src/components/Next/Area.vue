<script lang="ts" setup>
import * as d3 from "d3";
import { onMounted, ref, defineProps } from "vue";

const chartContainer = ref(null);

const props = defineProps<{
    data: any
}>();

const margin = { top: 40, right: 30, bottom: 30, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

onMounted(() => {
  const svg = d3
    .select(chartContainer.value)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // X scale
  const x = d3
    .scalePoint()
    .domain(props.data.map((d) => d.month))
    .range([0, width])
    .padding(0.1);

  // Y scale
  const y = d3.scaleLinear().domain([0, 4000]).range([height, 0]);

  // Add horizontal gridlines with dashed style
  svg
    .selectAll("line.horizontal-grid")
    .data(y.ticks(8))
    .enter()
    .append("line")
    .attr("class", "horizontal-grid")
    .attr("x1", 0)
    .attr("x2", width)
    .attr("y1", (d) => y(d))
    .attr("y2", (d) => y(d))
    .style("stroke", "#ddd")
    .style("stroke-dasharray", "3,3");

  // Create line generators
  const lineGenerator = d3
    .line()
    .x((d) => x(d.month))
    .y((d) => y(d.semiAnalysis))
    .curve(d3.curveMonotoneX);

  const lineGenerator2 = d3
    .line()
    .x((d) => x(d.month))
    .y((d) => y(d.pragmaticEngineer))
    .curve(d3.curveMonotoneX);

  // Add the lines
  svg
    .append("path")
    .datum(props.data)
    .attr("fill", "none")
    .attr("stroke", "#6366f1")
    .attr("stroke-width", 2)
    .attr("d", lineGenerator);

  svg
    .append("path")
    .datum(props.data)
    .attr("fill", "none")
    .attr("stroke", "#06b6d4")
    .attr("stroke-width", 2)
    .attr("d", lineGenerator2);

  // Add X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - 0})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  svg
    .append("g")
    .call(
      d3
        .axisLeft(y)
        .tickFormat((d) => `$${d}`)
        .ticks(8)
    )
    .style("color", "#999");

  // Add legend
  const legend = svg
    .append("g")
    .attr("transform", `translate(${width - 200},10)`);

  // SemiAnalysis legend item
  legend
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 5)
    .style("fill", "#6366f1");

  legend
    .append("text")
    .attr("x", 10)
    .attr("y", 4)
    .text("SemiAnalysis")
    .style("font-size", "12px")
    .style("fill", "#666");

  // Pragmatic Engineer legend item
  legend
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 20)
    .attr("r", 5)
    .style("fill", "#06b6d4");

  legend
    .append("text")
    .attr("x", 10)
    .attr("y", 24)
    .text("The Pragmatic Engineer")
    .style("font-size", "12px")
    .style("fill", "#666");

  // Add area fills
  const areaGenerator1 = d3
    .area()
    .x((d) => x(d.month))
    .y0(height)
    .y1((d) => y(d.semiAnalysis))
    .curve(d3.curveMonotoneX);

  const areaGenerator2 = d3
    .area()
    .x((d) => x(d.month))
    .y0(height)
    .y1((d) => y(d.pragmaticEngineer))
    .curve(d3.curveMonotoneX);

  svg
    .append("path")
    .datum(props.data)
    .attr("fill", "#6366f120")
    .attr("d", areaGenerator1);

  svg
    .append("path")
    .datum(props.data)
    .attr("fill", "#06b6d420")
    .attr("d", areaGenerator2);
});
</script>

<template>  
    <div ref="chartContainer" class="chart-container"></div>
</template>