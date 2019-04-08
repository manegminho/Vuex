<template>
  <div>
    <!-- #3 -->
    <p v-for="job in fetchedJobs">
      <a :href="job.news">{{job.title}}</a>
      <small>[ {{job.time_ago}} ],site : {{job.domain}}</small>
    </p>
    <!-- #2 -->
    <!--  <div v-for="job in askItems">{{job.title}}</div> -->
    <!-- #1 -->
    <!-- <div v-for="job in fetchedJobs">{{job.title}}</div> -->
    <!-- #0 -->
    <!--  <div v-for="job in this.$store.state.jobs">{{job.title}}</div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    //#3
    ...mapGetters(["fetchedJobs"])
    //#2
    /* ...mapGetters({
      askItems: "fetchedJobs"
    }) */
    //#1
    /* ...mapState({
      fetchedJobs: state => state.ask
    }) */
    //#0
    /* jobs(){
      return this.$store.state.jobs;
    } */
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
</style>
