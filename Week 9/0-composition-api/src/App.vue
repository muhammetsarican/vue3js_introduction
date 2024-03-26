<template>
  <div>
    <h3>{{ title || "{title is null}" }}</h3><p> you typed {{titleLength}} characters.</p>
    <input v-model="title" /><br />
    <button @click="toggleParagraph">Toggle the paragraph at below</button><br />
    <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
    <p v-if="toggle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a quo
      exercitationem nesciunt cupiditate tempore porro sint molestias, aliquid
      veniam accusamus magnam soluta officiis facere inventore quae voluptas
      impedit unde quas illo explicabo! Deleniti quisquam earum unde asperiores
      perspiciatis iure.
    </p>
    <br />
    <br />
    <input type="text" v-model="searchText" />
    <p v-if="isTyping">Typing now...</p>
  </div>
</template>
<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  setup() {
    //! ************************************************************************************
    const title = ref("Hello Composition Api");
    const toggle = ref(false);
    const counter = ref(0);
    const titleLength=ref(title.value.length);

    const toggleParagraph = () => {
      toggle.value = !toggle.value;
    };

    const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Even" : "Odd"));

    watch(title, ()=>titleLength.value=title.value.length);

    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldO, "=>", newO);
      console.log(oldC, "=>", newC);
    });
    //! ************************************************************************************
    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, () => {
    //   if (searchText.value.length > 0) isTyping.value = true;

    //   setTimeout(() => {
    //     isTyping.value=false;
    //   }, 2000);
    // })

    //INFO: the watchEffect function is used to if searchText changed again clearing for the timeout func;
    const stop=watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) isTyping.value = true;

      const typing=setTimeout(() => {
        isTyping.value = false;
        stop();
      }, 2000);

      onInvalidate(()=>clearTimeout(typing));
    });

    return {
      title,
      titleLength,
      toggle,
      toggleParagraph,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>