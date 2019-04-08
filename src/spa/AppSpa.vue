<template>
  <div align="center">
    <div>
      <app-header></app-header>
    </div>
    <p style="margin-bottom:365px"></p>
    <div align="center">
      <font color="green" size="100">
        <b>Axios</b>
        <p style="margin-bottom:5px"></p>
      </font>
    </div>

    <div class="inputBox shadow">
      <font size="8">https://api.hnpwa.com/v0/news/1.json</font>
      <span class="addContainer">
        <font size="6">
          <i class="addBtn fas fa-envelope" aria-hidden="true" @click="fetchNewsData"></i>
        </font>
      </span>
    </div>
    <p style="margin-bottom:25px"></p>
    <div class="inputBox shadow">
      <font size="8">https://api.hnpwa.com/v0/ask/1.json</font>
      <span class="addContainer">
        <font size="6">
          <i class="addBtn fas fa-envelope" aria-hidden="true" @click="fetchAskData"></i>
        </font>
      </span>
    </div>
    <p style="margin-bottom:25px"></p>
    <div class="inputBoxRcv shadow">
      <font color="red" size="5">
        <B>
          <font color="green" size="7">
            <i class="fas fa-envelope-open-text"></i> Response
          </font>
        </B>

        <div v-for="item in newsItems ">{{ item.title }}</div>
      </font>
    </div>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
import axios from "axios";
export default {
  data() {
    return {
      newsItems: []
    };
  },
  components: {
    AppHeader
  },
  methods: {
    fetchNewsData() {
      axios
        .get("https://api.hnpwa.com/v0/news/1.json")
        .then(response => {
          console.log(response);
          this.newsItems = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchAskData() {
      axios
        .get("https://api.hnpwa.com/v0/ask/1.json")
        .then(response => {
          console.log(response);
          this.newsItems = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.addBtn {
  color: white;
  vertical-align: middle;
}
.inputBox {
  background: #99ff99;
  height: 4rem;
  width: 1240px;
  line-height: 50px;
  border-radius: 5px;
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
  height: 4rem;
  border-radius: 0 5px 5px 0;
  vertical-align: middle;
}
</style>
