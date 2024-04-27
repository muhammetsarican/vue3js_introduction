<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input
      v-model="userInfo.fullname"
      type="text"
      placeholder="Full Name"
      class="input mb-3"
    />
    <input
      v-model="userInfo.username"
      type="text"
      placeholder="User Name"
      class="input mb-3"
    />
    <input
      v-model="userInfo.pswd"
      type="password"
      placeholder="Password"
      class="input mb-3"
    />
    <button class="default-button" @click="onSave">Register</button>
    <span class="text-center mt-3 text-sm">
      I'm already a member,
      <router-link
        :to="{ name: 'LoginPage' }"
        class="text-red-900 hover:text-black"
        >Login!</router-link
      >
    </span>
  </div>
</template>
<script setup>
import CryptoJs from "crypto-js";
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const appAxios = inject("appAxios");
const router = useRouter();
const store = useStore();

const userInfo = ref({
  fullname: null,
  username: null,
  pswd: null,
});

const onSave = () => {
  const password = CryptoJs.HmacSHA1(
    userInfo.value.pswd,
    store.getters._getSaltKey
  ).toString();
  console.log(password);

  appAxios
    .post("/users", { ...userInfo.value, pswd: password })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("An error occured. Error: ", error);
    });

  router.push({ name: "HomePage" });
};
</script>