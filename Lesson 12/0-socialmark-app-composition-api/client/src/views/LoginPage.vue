<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input
      v-model="userData.username"
      type="text"
      placeholder="User Name"
      class="input mb-3"
    />
    <input
      v-model="userData.pswd"
      type="password"
      placeholder="Password"
      class="input mb-3"
    />
    <button class="default-button" @click="onSubmit">Login</button>
    <span class="text-center mt-3 text-sm">
      I am not a member,
      <router-link
        :to="{ name: 'RegisterPage' }"
        class="text-red-900 hover:text-black"
        >I want to be a member!</router-link
      >
    </span>
  </div>
</template>
<script setup>
import { ref, inject } from "vue";
import CryptoJs from "crypto-js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const appAxios = inject("appAxios");
const router = useRouter();
const store = useStore();

const userData = ref({
  username: null,
  pswd: null,
});

const onSubmit = () => {
  const password = CryptoJs.HmacSHA1(
    userData.value.pswd,
    store.getters._getSaltKey
  ).toString();
  console.log(password);

  appAxios
    .get(`/users?username=${userData.value.username}&pswd=${password}`)
    .then((loginResponse) => {
      if (loginResponse?.data?.length > 0) {
        store.commit("saveUser", loginResponse?.data[0]);
        router.push({ name: "HomePage" });
      } else {
        alert("No user found like that!");
      }
    });
};
</script>