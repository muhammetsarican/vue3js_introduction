<template>
  <div>
    <h3>{{ title || "{title is null}" }}</h3>
    <p>you typed {{ titleLength }} characters.</p>
    <input v-model="title" /><br />
    <button @click="toggleParagraph">Toggle the paragraph at below</button
    ><br />
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
import Header from "./composable/Header";
import Counter from "./composable/Counter";
import Search from "./composable/Search";
import Toggle from "./composable/Toggle";
export default {
  setup() {
    const { searchText, isTyping } = Search();
    const { title, titleLength } = Header();
    const { counter, oddOrEven } = Counter();
    const { toggle, toggleParagraph } = Toggle();

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