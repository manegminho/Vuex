<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
    <p style="margin-bottom:365px"></p>
    <div align="center">
      <font color="maroon" size="20">
        <b>
          <i class="fas fa-share-alt"></i> Getters, mutations, actions
        </b>
      </font>
      <br>
      <br>
      <font color="green" size="20">
        <i class="fas fa-database"></i> Store Initional Data
      </font>
      <div class="inputBox shadow">
        <font color="red" size="5">
          <b>Hi</b>
        </font>
      </div>
      <p style="margin-bottom:25px"></p>
      <div align="center">
        <font color="rebeccapurple" size="20">Mutation</font>
      </div>
      <div class="inputBox shadow">
        Recieve Msg :
        <font color="red" size="5">
          <B>{{this.msg}}</B>
        </font>
        <span class="addContainer">
          <i class="addBtn fas fa-envelope" aria-hidden="true" @click="changeMsg"></i>
        </span>
      </div>

      <p style="margin-bottom:25px"></p>
      <div align="center">
        <font color="rebeccapurple" size="20">Getter</font>
      </div>
      <div class="inputBox shadow">
        Recieve Msg :
        <font color="red" size="5">
          <B>{{ this.DataMsg}}</B>
        </font>
        <span class="addContainer">
          <i class="addBtn fas fa-envelope" aria-hidden="true" @click="GetterchangeMsg"></i>
        </span>
      </div>

      <p style="margin-bottom:25px"></p>

      <div align="center">
        <font color="rebeccapurple" size="10">
          Actions
          <i class="fas fa-caret-square-right" @click="fetchUser"></i>
        </font>
      </div>

      <div class="inputBoxRcv shadow">
        <font color="red" size="5">
          <B>
            <div>
              <font color="blue">https://jsonplaceholder.typicode.com/users/1</font>
              <br>
              {{ result }}
            </div>
          </B>
        </font>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppHeader from "../views/AppHeader.vue";

export default {
  data() {
    return {
      DataMsg: "hi"
    };
  },
  components: {
    AppHeader
  },
  computed: mapState(["msg"]),
  computed: {
    msg() {
      return this.$store.state.msg;
    },
    receiveMsg() {
      return this.$store.state.receiveMsg;
    },
    exclaimMessage() {
      return this.$store.state.exclaimMessage;
    }
  },
  computed: {
    ...mapState(["result", "msg"]),
    ...mapGetters(["exclaimMessage"])
  },

  methods: {
    changeMsg() {
      this.$store.commit("changeMessage");
    },
    GetterchangeMsg() {
      this.DataMsg = this.exclaimMessage;
    },
    fetchUser() {
      /*  fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(json => (this.result = json)); */
      this.$store.dispatch("FETCH_USER");
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: maroon;
}
p {
  text-align: center;
}

input:focus {
  outline: none;
}
.inputBox {
  background: #99ff99;
  height: 4rem;
  width: 440px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBoxRcv {
  background: #ffffcc;
  height: 450px;
  width: 740px;
  line-height: 50px;
  border-radius: 5px;
  border-style: groove;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
   height: 4rem;
  border-radius: 0 5px 5px 0;
  
}

.addContainerAction {
  float: center;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: center;
}
.closeModalBtn {
  color: #42b983;
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
</style>


