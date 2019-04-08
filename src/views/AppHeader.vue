<template>
  <span align="right">
    <h2>
      <br>
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>&nbsp;
      <router-link to="/login">
        <i class="fas fa-user"></i>
      </router-link>&nbsp;
      <i class="fas fa-sign-out-alt"></i>
      &nbsp;
    </h2>
    <!--  <p style="margin-bottom:185px"></p> -->
  </span>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
i {
  color: white;
  font-size: 30px;
}
</style>
