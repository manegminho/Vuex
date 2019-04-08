<template>
  <div align="center">
    <App-header></App-header>
    <p style="margin-bottom:305px"></p>
    <h1>&emsp;&emsp;&emsp;&emsp;Signup</h1>
    <br>
    <br>
    <div class="mb-4">
      <b>&emsp;&emsp;&emsp;&emsp;&emsp;I D</b>&emsp;:&emsp;
      <input
        class="shadow appearance-none border rounded inputWid py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="userid"
        type="text"
        placeholder="User  ID"
        v-model="userId"
        v-bind:class="checkIDMsg"
      >
      <span class="addContainer">
        <i class="addBtn fas fa-check-circle" aria-hidden="true"></i>
      </span>
      <p class="text-red text-xs italic">&emsp;&emsp;&emsp;&emsp;{{this.IdMessage}}</p>
    </div>
    <div class="mb-6">
      <b>&emsp;&emsp;PassWord :</b>&emsp;
      <input
        class="shadow appearance-none border border-red rounded inputWid2 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="12자리 이상 입력해주세요"
        v-model="password"
        v-bind="CheckPaswordMsg"
      >
      <p class="text-red text-xs italic">&emsp;&emsp;&emsp;&emsp;{{this.PasswordMessage}}</p>
    </div>
    <div class="mb-4">
      <b>&emsp;&emsp;&emsp;&emsp;Check</b>&emsp;:&emsp;
      <input
        class="shadow appearance-none border userNamerounded inputWid py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="Checkpassword"
        type="password"
        placeholder="Again Pasword"
        v-model="Checkpassword"
      >
      <span class="addContainer">
        <i class="addBtn fas fa-check-circle" aria-hidden="true" @click="fnCheckPassword"></i>
      </span>
      <p class="text-red text-xs italic">&emsp;&emsp;&emsp;&emsp;{{this.CheckpasswordMessage}}</p>
    </div>
    <br>
    <div class="mb-4">
      <b>&emsp;&emsp;&emsp;&emsp;name</b>&emsp;:&emsp;
      <input
        class="shadow appearance-none border rounded inputWid2 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="userName"
        type="text"
        placeholder="Name"
        v-model="userName"
      >
    </div>
    <div class="mb-4">
      <b>&emsp;&emsp;&emsp;&emsp;Email</b>&emsp;:&emsp;
      <input
        class="shadow appearance-none border rounded inputEmail py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="Email"
        type="text"
        placeholder="Eamil"
        v-model="userEmail"
      >

      <select name="volumn" class="ComboxEmail" id="site" v-model="site" v-bind:class="checkSite">
        <option value="@naver.com">네이버</option>
        <option value="@hanmail.net">다음</option>
        <option value="@gmail.com">구글</option>
        <option value="@naver.com">네이버</option>
      </select>
    </div>

    <br>
    <br>
    <div align="center">
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >Sign In</button>
    </div>
    <p style="margin-bottom:305px"></p>
  </div>
</template>

<script>
import AppHeader from "../views/AppHeader.vue";
export default {
  data() {
    return {
      userId: "",
      IdMessage: "",
      password: "",
      PasswordMessage: "",
      Checkpassword: "",
      CheckpasswordMessage: "PassWord 입력란과 같게 입력해주세요",
      userName: "",
      userEmail: "",
      site: ""
    };
  },
  components: {
    AppHeader
  },
  computed: {
    checkIDMsg() {
      if (this.userId.length > 8) {
        this.IdMessage = "";
      } else {
        this.IdMessage = "아이디 8글자 이상 넣어주세요";
      }
    },
    CheckPaswordMsg() {
      if (this.password.length > 8) {
        this.PasswordMessage = "";
      } else {
        this.PasswordMessage = "비밀번호 8글자 이상 넣어주세요";
      }
    },
    checkSite() {
      this.userEmail = this.site;
    }
  },
  methods: {
    fnCheckPassword() {
      if (this.password.length < 8) {
        this.CheckpasswordMessage = "비밀번호 8글자 이상 넣어주세요";
      } else if (this.password == this.Checkpassword) {
        this.CheckpasswordMessage = "일치";
      } else {
        this.CheckpasswordMessage = "불일치";
      }
    }
  }
};
</script>

<style scope>
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
  width: 3rem;
  height: 3rem;
  vertical-align: top;
  border-radius: 0 5px 5px 0;
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

