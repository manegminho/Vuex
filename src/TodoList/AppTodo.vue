<template>
  <div align="center">
    <app-header></app-header>
    <p style="margin-bottom:365px"></p>
    <div class="heading">TodoList</div>
    <p style="margin-bottom:15px"></p>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <p style="margin-bottom:55px"></p>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import TodoFooter from "./TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: []
    };
  },
  components: {
    AppHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
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
</style>
