<template>
  <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input v-model="userData.username" type="text" placeholder="User Name" class="input mb-3" />
      <input v-model="userData.pswd" type="password" placeholder="Password" class="input mb-3" />
      <button class="default-button" @click="onSubmit">Login</button>
      <span class="text-center mt-3 text-sm">
        I am not a member,
        <router-link :to="{name: 'RegisterPage'}" class="text-red-900 hover:text-black">I want to be a member!</router-link>
      </span>
    </div>
</template>
<script>
import CryptoJs from "crypto-js";

export default{
  data(){
    return{
      userData:{
        username:null,
        pswd:null
      }
    }
  },
  methods:{
    onSubmit(){
      const password=CryptoJs.HmacSHA1(this.userData.pswd, this.$store.getters._getSaltKey).toString();
      console.log(password)

      this.$appAxios.get(`/users?username=${this.userData.username}&pswd=${password}`)
      .then((loginResponse)=>{
        if(loginResponse?.data?.length>0){
           this.$store.commit("saveUser", loginResponse?.data[0]);
           this.$router.push({name:"HomePage"});
        }
        else{
          alert("No user found like that!");
        }
      })
    }
  }
}
</script>