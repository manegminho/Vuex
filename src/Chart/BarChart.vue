<template>
  <div>
    <h1>Bar Chart</h1>
    <canvas id="BarChart" width="400" height="400" ref="BarChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: ["chartbarData", "type"],
  watch: {
    chartbarData: {
      handler() {
        this.renderChart();
      }
    }
  },
  methods: {
    renderChart() {
      //var ctx = document.getElementById("myChart1").getContext("2d");
      var ctx = this.$refs.BarChart.getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: this.chartbarData
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>