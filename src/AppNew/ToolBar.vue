<template>
  <div>
    <span class="addContainer" @click="ChangeMode(1)">News</span>
    &emsp;
    <span class="addContainer" @click="ChangeMode(2)">Ask</span>
    &emsp;
    <span class="addContainer" @click="ChangeMode(3)">Job</span>

    <p style="margin-bottom:35px"></p>
    <template v-if="isNews">
      <news-view></news-view>
    </template>
    <template v-if="isAsk">
      <ask-view></ask-view>
    </template>
    <template v-if="isJob">
      <job-view></job-view>
    </template>
  </div>
</template>

<script>
import AskView from "./AskView.vue";
import JobView from "./JobView.vue";
import NewsView from "./NewsView.vue";

export default {
  data() {
    return {
      isNews: false,
      isAsk: false,
      isJob: false
    };
  },
  components: {
    AskView,
    JobView,
    NewsView
  },
  methods: {
    ChangeMode(num) {
      switch (num) {
        case 1: {
          this.isNews = true;
          this.isAsk = false;
          this.isJob = false;
          break;
        }
        case 2: {
          this.isNews = false;
          this.isAsk = true;
          this.isJob = false;
          break;
        }
        case 3: {
          this.isNews = false;
          this.isAsk = false;
          this.isJob = true;
          break;
        }
        default: {
          this.isNews = true;
          this.isAsk = false;
          this.isJob = false;
        }
      }
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

<style scoped>
.inputWid {
  width: 30rem;
  height: 3rem;
}
.inputWid2 {
  width: 33rem;
  height: 3rem;
}
.inputEmail {
  width: 28rem;
  height: 3rem;
}
.ComboxEmail {
  width: 5rem;
  height: 3rem;
  align-content: center;
  align-items: center;
  border: 1px solid green;
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
.tooler {
  width: 90rem;
}
.inputBox {
  background: #99ff99;
  height: 50px;
  width: 740px;
  line-height: 50px;
  border-radius: 5px;
}
.addContainer {
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 6rem;
  height: 3rem;
  color: white;
  vertical-align: middle;
  border-radius: 5px 5px 5px 5px;
  line-height: 45px;
}
.addBtn {
  color: white;
  vertical-align: middle;
  margin: 0.5rem 0;
  font-size: xx-large;
}
.signupTool {
  text-indent: 60px;
}
</style>
