<template>
  <div align="center">
    <p style="margin-bottom:365px"></p>
    <button @click="loginUser">login</button>
    {{todo}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todo: null
    };
  },
  methods: {
    loginUser: async function() {
      try {
        var user = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (user.data.id == 1) {
          var todo = await axios.get(
            "https://jsonplaceholder.typicode.com/todo/1"
          );
          console.log(todo);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
