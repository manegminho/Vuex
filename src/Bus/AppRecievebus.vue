<template>
  <div align="center">
    <font size="100" color="maroon">
      <b>
        <i class="fas fa-envelope">&nbsp;Recieve Message</i>
      </b>
    </font>
    <p style="margin-bottom:15px"></p>
    <div class="inputBoxRcv shadow">{{ this.rcvMsg}}</div>
    <p style="margin-bottom:215px"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rcvMsg: ""
    };
  },
  created() {
    this.$EventBus.$on("SendMessage", value => {
      this.rcvMsg = value;
      console.log(value);
    });
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
  height: 50px;
  width: 840px;
  height: 50px;
  width: 840px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBoxRcv {
  background: #ffffcc;
  height: 350px;
  width: 1040px;
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
