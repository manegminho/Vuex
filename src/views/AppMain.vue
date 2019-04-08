<template>
  <div>
    <app-header></app-header>
    <div align="center">
      <!--     <img src="../image/Header.gif"> -->
      <p style="margin-bottom:365px"></p>

      <font size="70px" color="violet">[</font>
      <router-link to="/Vuex">
        <font size="70px" color="violet">
          <i class="fab fa-vuejs">
            <!--  <font size="2" color>vuex</font> -->
          </i>
        </font>
      </router-link>
      <font size="70px" color="violet">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="black">[</font>
      <router-link to="/chart">
        <font size="7px" color="black">
          <i class="fas fa-chart-bar">
            <!-- <font size="2" color>chart</font> -->
          </i>
        </font>
      </router-link>
      <font size="7px" color="black">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="maroon">[</font>
      <router-link to="/spa">
        <font size="7px" color="maroon">
          <i class="fas fa-spa">
            <!-- <font size="2" color>spa</font> -->
          </i>
        </font>
      </router-link>
      <font size="7px" color="maroon">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="yellow">[</font>
      <router-link to="/bus">
        <font size="7px" color="yellow">
          <i class="fas fa-bus-alt">
            <!-- <font size="2" color>spa</font> -->
          </i>
        </font>
      </router-link>
      <font size="7px" color="yellow">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="yellowgreen">[</font>
      <router-link to="/list">
        <font size="7px" color="yellowgreen">
          <i class="fas fa-list-alt">
            <!-- <font size="2" color>spa</font> -->
          </i>
        </font>
      </router-link>
      <font size="7px" color="yellowgreen">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="blue">[</font>
      <router-link to="/slot">
        <font size="7px" color="blue">
          <i class="fab fa-accusoft"></i>
          <!-- <font size="2" color>spa</font> -->
        </font>
      </router-link>
      <font size="7px" color="blue">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="red">[</font>
      <router-link to="/setup">
        <font size="7px" color="red">
          <i class="fas fa-cogs"></i>
          <!-- <font size="2" color>spa</font> -->
        </font>
      </router-link>
      <font size="7px" color="red">]</font>
      &nbsp;&nbsp;&nbsp;
      <!-- ////// -->
      <font size="7px" color="coral">[</font>
      <router-link to="/axios">
        <font size="7px" color="coral">
          <i class="fab fa-gitlab"></i>
          <!-- <font size="2" color>spa</font> -->
        </font>
      </router-link>
      <font size="7px" color="cornflowerblue">]</font>
      &nbsp;&nbsp;&nbsp;
      <br>
      <br>
      <!-- ////// -->
      <font size="7px" color="cornflowerblue">[</font>
      <router-link to="/NewView">
        <font size="7px" color="cornflowerblue">
          <i class="fas fa-battery-three-quarters"></i>
          <!-- <font size="2" color>spa</font> -->
        </font>
      </router-link>
      <font size="7px" color="cornflowerblue">]</font>
      &nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: yellow;
}
</style>
