<template>
  <h3>{{ this.$store.state.title }}</h3>
  <h4>{{ this.$store.state.contactPage.contactTitle }}</h4>
  <h5>{{ getTitle }}</h5>
  <hr>
  <h6>Item List</h6>
  <ul v-for="item in getItemList" :key="item.id">
    <li>{{ item.title }}</li>
  </ul>
</template>
<script>
export default {
  /* 
  --contact.js
  contactPage/setItem": Array [ wrappedMutationHandler(payload) ] = namespaced:true

  --taskManager.js
  setItem: Array [ wrappedMutationHandler(payload) ] = namespaced:false
  */

  created() {
    console.log(this.$store)
    console.log(this.$store.getters["contactPage/_contactTitle"]); // if namespaced set, we call _contactTitle like this
  },
  computed: {
    getTitle() {
      return this.$store.getters["_contactTitle"]; // if namespaced not set, we call _contactTitle like this
    },
    getItemList() {
      return this.$store.getters["_itemList"];
    }
  }
}
</script>