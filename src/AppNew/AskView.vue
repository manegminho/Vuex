<template>
  <div>
    <!-- #0 -->
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">{{item.title}}</a>
      <small>[ {{item.time_ago}} ] by {{item.user}}</small>
    </p>

    <!-- #1 -->
    <!-- <div v-for="item in askItems">{{item.title}}</div>  -->
    <!-- #2 -->
    <!-- <div v-for="item in fetchedAsk">{{item.title}}</div> -->
    <!-- #3 -->
    <!-- <div v-for="job in this.$store.state.ask">{{job.title}}</div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    //#0
    ...mapGetters(["fetchedAsk"])

    //#1
    /* ...mapGetters({
      askItems: "fetchedAsk"
    })
    */
    //#2
    /*  ...mapState({
      fetchedAsk: state => state.ask
    }) */

    //#1
    /* ask() {
      return this.$store.state.ask;
    } */
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style>
</style>
