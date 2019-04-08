<template>
  <div class="inputBox shadw">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="type what you have to do"
      v-on:keyup.enter="addTodo"
    >
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showMdal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        할일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>


<script>
import Modal from "./Model.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>


<style scoped>
input:focus {
  outline: none;
}
input {
  background: #99ff99;
  text-align: center;
  height: 50px;
  width: 540px;
}
.inputBox {
  background: #99ff99;
  height: 50px;
  width: 740px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.03);
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>

