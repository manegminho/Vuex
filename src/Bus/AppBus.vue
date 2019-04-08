<template>
  <div align="center">
    <app-header></app-header>
    <p style="margin-bottom:365px"></p>
    <font size="100" color="blue">
      <b>
        <i class="fas fa-bus-alt">&nbsp;Data Bus</i>
      </b>
    </font>
    <p style="margin-bottom:65px"></p>
    <app-sendbus></app-sendbus>
    <p style="margin-bottom:65px"></p>
    <app-recievebus></app-recievebus>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
import AppSendbus from "./AppSendbus.vue";
import AppRecievebus from "./AppRecievebus.vue";
export default {
  components: {
    AppHeader,
    AppSendbus,
    AppRecievebus
  }
};
</script>

<style>
</style>
