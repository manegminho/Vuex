<template>
  <div align="center">
    <app-header></app-header>
    <p style="margin-bottom:305px"></p>
    <h1>New App</h1>
    <p style="margin-bottom:35px"></p>
    <tool-bar></tool-bar>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
import ToolBar from "./ToolBar.vue";

export default {
  components: {
    AppHeader,
    ToolBar
  }
};
</script>

<style>
</style>
