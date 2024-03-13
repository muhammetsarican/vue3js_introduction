<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input v-model="userInfo.fullname" type="text" placeholder="Full Name" class="input mb-3" />
      <input v-model="userInfo.username" type="text" placeholder="User Name" class="input mb-3" />
      <input v-model="userInfo.pswd" type="password" placeholder="Password" class="input mb-3" />
      <button class="default-button" @click="onSave">Register</button>
      <span class="text-center mt-3 text-sm">
        I'm already a member,
        <router-link :to="{name: 'LoginPage'}" class="text-red-900 hover:text-black">Login!</router-link>
      </span>
    </div>
</template>
<script>
import CryptoJs from "crypto-js";

export default{
  data(){
    return{
      userInfo: {
        fullname:null,
        username:null,
        pswd:null,
      }
    }
  },
  methods:{
    onSave(){
      const password=CryptoJs.HmacSHA1(this.userInfo.pswd, this.$store.getters._getSaltKey).toString();
      console.log(password);

      this.$appAxios.post("/users",{...this.userInfo, pswd:password})
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log("An error occured. Error: ",error);
      })

      this.$router.push({name:"HomePage"});
    }
  }
}
</script>