<template>
  <div>
    <h1>Line Chart</h1>
    <canvas id="LineChart" width="100" height="100" ref="linechart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  props: ["chartlinData", "type"],
  watch: {
    chartlinedata: {
      handler() {
        this.renderBarChart();
      }
    }
  },
  methods: {
    renderBarChart() {
      var ctx = this.$refs.linechart.getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45]
            }
          ]
        },

        // Configuration options go here
        options: {}
      });
    }
  },
  mounted() {
    this.renderBarChart();
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
