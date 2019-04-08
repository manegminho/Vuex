<template>
  <div>
    <app-header></app-header>
    <p style="margin-bottom:365px"></p>
    <bar-chart v-bind:chartbarData="fetchedBarData" type="bar"></bar-chart>
    <!-- <line-chart v-bind:chartlinData="fetchedLineData" type="bar"></line-chart> -->
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
import AppHeader from "../views/AppHeader.vue";

let BarchartData = [
  {
    label: "# of Votes",
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)"
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)"
    ],
    borderWidth: 1
  }
];

let LinechartData = [
  {
    label: "My First dataset",
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
    data: [0, 10, 5, 2, 20, 30, 45]
  }
];
export default {
  components: {
    BarChart,
    LineChart,
    AppHeader
  },
  data() {
    return {
      fetchedBarData: null
      //fetchedLineData: null
    };
  },
  created() {
    this.fetchBarChartData().then(result => {
      /* console.log(result); */
      this.fetchedBarData = result;
    });
    /*   this.fetchLineChartData().then(result => {
      this.fetchedLineData = result;
    }); */
  },
  methods: {
    fetchBarChartData() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(BarchartData);
        }, 2000);
      });
    }

    /*  fetchLineChartData() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(LinechartData);
        }, 2000);
      });
    } */
  }
};
</script>

<style>
</style>
