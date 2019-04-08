<template>
  <div>
    <router-view></router-view>
  </div>
</template>



<script>
import AppHeader from "./views/AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>

<style>
body {
  background-image: url("./image/Header.gif");
  background-repeat: no-repeat;
  background-position: top;
}
table {
  background-color: transparent;
}
td {
  background-color: transparent;
}
</style>
