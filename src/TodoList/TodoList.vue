<template>
  <section>
    <transition-group name="list">
      <li v-for="(todoItem,index) in propsdata" :key="todoItem" class="shadow">
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted:todoItem.completed}"
          v-on:click="toggleComplete(todoItem,index)"
        ></i>
        <span v-bind:class="{textCompleted : todoItem.completed}">
          <font align="center">{{ todoItem }}</font>
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    }
  },
  toggleComplete: function(todoItem, index) {
    console.log(todoItem);
    this.$emit("toggleItem", todoItem, index);
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: center;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  width: 800px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 200px;
  border: 1px solid green;
  margin-bottom: 15px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

