<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { PropType } from "vue";
import { Line } from "vue-chartjs";

const props = defineProps({
  chartData: {
    type: Array as PropType<number[]>,
  },
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);
const chartData = {
  labels: ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
  datasets: [
    {
      backgroundColor: "rgba(255, 200, 0, 0.2)",
      borderColor: "rgba(255, 200, 0,0.5)",
      data: props.chartData,
      fill: true,
      tention: 0.3,
      borderWidth: 2,
      pointBorderWidth: 3,
      pointBackgroundColor: "rgb(255, 200, 0)",
    },
  ],
};
const chartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#cccac9",
        textStrokeWidth: 10,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        lineWidth: 3,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#cccac9",
        max: 360,
        stepSize: 90,
        min: 0,
        textStrokeWidth: 1,
        padding: 10,
      },
    },
  },
};
</script>

<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
