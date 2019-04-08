<template>
  <div align="center">
    <app-header></app-header>
    <p style="margin-bottom:365px"></p>
    <div class="heading">
      <h1>Package Setup</h1>
    </div>
    <p style="margin-bottom:105px"></p>
    <div class="bodies1">cli 설치 명령어</div>
    <br>
    <div class="inputBox shadow">npm install -g @vue/cli</div>
    <br>
    <div class="bodies1">vue 설치</div>
    <br>
    <div class="inputBox shadow">vue create vue-news</div>
    <br>
    <div class="bodies1">axios설치</div>
    <br>
    <div class="inputBox shadow">npm install --save axios</div>
    <br>
    <div class="bodies1">라우터 설치</div>
    <br>
    <div class="inputBox shadow">npm install vue-router</div>
    <br>
    <div class="bodies1">챠트 설치</div>
    <br>
    <div class="inputBox shadow">npm install chart.js --save</div>
    <br>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>

<style scoped>
.heading {
  font-size: xx-large;
  font-weight: 800;
  color: red;
  text-align: center;
}

.bodies1 {
  font-size: x-large;
  font-weight: 600;

  text-align: center;
}

.bodies2 {
  font-size: xx-large;
  font-weight: 600;
  color: red;
  text-align: center;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
.inputBox {
  background: #99ff99;
  height: 70px;
  width: 940px;
  line-height: 50px;
  border-radius: 5px;
  font-size: xx-large;
  font-weight: 600;
  color: red;
  text-align: center;
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
.inputBoxRcv {
  background: #ffffcc;
  height: 1950px;
  width: 940px;
  line-height: 50px;
  border-radius: 5px;
  border-style: groove;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 5rem;
  height: 70px;
  border-radius: 0 5px 5px 0;
  vertical-align: middle;
}
</style>
