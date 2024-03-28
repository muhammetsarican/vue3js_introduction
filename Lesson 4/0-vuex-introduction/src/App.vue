<template>
  <p>We adding Vuex!</p>
  <hr>
  <h3>State 'ItemList'</h3>
  <ul v-for="item in this.$store.state.itemList" :key="item.id">
    <li>{{ item.title }}</li>
  </ul>
  <hr>
  <WoodItems />
  <NewItem />
  <hr>
  <div style="display: flex; width: 250px; height: 25px; justify-content: space-between; align-items: center;">
    <p>{{ this.$store.state.person.name }}</p>
    <button @click="changeName">Change User Name</button>
  </div>
</template>

<script>
import WoodItems from './components/WoodItems.vue';
import NewItem from './components/NewItem.vue';

export default {
  components: {
    WoodItems,
    NewItem
  },
  created() {
    console.log(this.$store.state.person);
    console.log(this.$store.getters.activeUsers);
  },
  methods: {
    changeName() {
      this.$store.state.person.name = "Musa";
    },

  },
}
</script>