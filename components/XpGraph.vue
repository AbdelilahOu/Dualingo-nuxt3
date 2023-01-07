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
import { Line } from "vue-chartjs";

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
      borderColor: "rgb(255, 200, 0)",
      data: [40, 20, 12, 40, 20, 12, 12],
      fill: true,
      lineTention: 0.3,
    },
  ],
};
const chartOptions = {
  responsive: true,
};
</script>

<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
