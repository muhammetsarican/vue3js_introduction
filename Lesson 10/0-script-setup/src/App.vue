<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <button @click="incCounter">{{ counter }}</button>
    <OddOrEven :counter="counter" @odd-event="oddEvent" />
    <!-- //!user app -->
    <br />
    <br />
    <h1>User App</h1>
    <input type="text" name="" id="" v-model="state.personal.name" />
    <input type="text" name="" id="" v-model="state.personal.surname" />
    <br />
    <p>{{ state.personal }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import OddOrEven from "./components/OddOrEven.vue";
import Utils from "./composables/Utils";

const { title, counter, incCounter, oddEvent } = Utils();

const fname = ref("");
const lname = ref("");

const state = reactive({
  personal: {
    name: "",
    surname: "",
  },
});

// ! it is import for watching a object defined like that, because a bug occurs when you want to run that watch function and the object data not changes.
watch(()=>JSON.parse(JSON.stringify(state.personal)), (newPersonal, oldPersonal)=>{
  console.log(oldPersonal, "=>", newPersonal);
})
</script>