<template>
  <div>
    <p v-for="item in fetchedNews">
      <a v-bind:href="item.url">{{item.title}}</a>
      <small>[ {{item.time_ago}} ] by {{item.user}}</small>
    </p>
    <!-- #3 -->
    <!-- <div v-for="user in fetchedNews">{{user.title}}</div> -->
    <!-- #2 -->
    <!-- <div v-for="user in newsItems">{{user.title}}</div> -->
    <!-- #1 -->
    <!-- <div v-for="user in fetchedNews">{{user.title}}</div> -->
    <!-- #0 -->
    <!-- <div v-for="user in news">{{user.title}}</div> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    //#3
    ...mapGetters(["fetchedNews"])
    // #2
    /* ...mapGetters({
      newsItems: "fetchedNews"
    }) */
    //#1
    /*  ...mapState({
      fetchedNews: state => state.news
    }) */
    //#0
    /* news() {
      return this.$store.state.news;
    } */
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style>
</style>
