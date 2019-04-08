<template>
  <div align="center">
    <App-header></App-header>
    <p style="margin-bottom:305px"></p>
    <h1>Login</h1>
    <p style="margin-bottom:40px"></p>
    <form v-on:submit="sebmitForm" class="bg-white shadow-md rounded tooler px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Username</label>
        <input
          class="shadow appearance-none border rounded inputWid py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="username"
          v-bind:class="inputUserNameClass"
        >
        <p class="text-red text-xs italic" v-if="isUserNameInvaild">Username must be over 5 letters</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border border-red rounded inputWid py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        >
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div>
        <p style="margin-bottom:15px"></p>
        <router-link to="/signup">
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Sign In</button>
        </router-link>&nbsp;&nbsp;&nbsp;
        <button
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Login</button>
      </div>
      <p style="margin-bottom:15px"></p>
      <a
        class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
        href="#"
      >Forgot Password?</a>

      <p class="text-center text-grey text-xs">©2018 Captain Pangyo. All rights reserved.</p>
    </form>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    AppHeader
  },
  computed: {
    isUserNameInvaild() {
      return this.username.length > 6;
    },
    inputUserNameClass() {
      this.username = this.username.substring(0, 18);
    }
  },
  methods: {
    sebmitForm() {
      var vm = this;
      event.preventDefault();
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/users/",
        method: "post",
        dataType: "json",
        contentType: "appliction/json; charser=utf-8",
        data: JSON.stringify({
          name: vm.username,
          password: vm.password
        })
      })
        .then(function(response) {
          console.log(response);
          vm.initForm();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    initForm() {
      vm.username = "";
      vm.password = "";
    }
  }
};
</script>

<style scope>
.inputWid {
  width: 40rem;
}

.tooler {
  width: 50rem;
}
</style>
