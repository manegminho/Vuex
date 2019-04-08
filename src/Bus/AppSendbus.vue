<template>
  <div align="center">
    <font size="100" color="thistle">
      <b>Send Message</b>
    </font>
    <div class="inputBox shadow">
      <input
        type="text"
        v-model="newTodoItem"
        placeholder="Type what you have to do"
        v-on:keyup.enter="SendMsg"
      >

      <span class="addContainer">
        <i class="addBtn fas fa-envelope" aria-hidden="true" @click="SendMsg"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    SendMsg: function() {
      var Msg = this.newTodoItem && this.newTodoItem.trim();
      //tihs.$evnetBus.$emit("SendMessage", Msg);
      this.$EventBus.$emit("SendMessage", Msg);
      console.log(Msg);
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
input {
  background: #99ff99;
  text-align: center;
  height: 50px;
  width: 740px;
}

input:focus {
  outline: none;
}
.inputBox {
  background: #99ff99;
  height: 4rem;
  width: 840px;
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
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
</style>
