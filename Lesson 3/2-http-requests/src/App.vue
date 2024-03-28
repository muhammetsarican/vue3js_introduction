<template>
  <div class="container">
    <h3>Shop List</h3>
    <hr>
    <input @keydown.enter="saveItem" class="my-2" type="text" name="" id="" placeholder="Add an Item">
    <hr>
    <div v-if="itemCount != 0">
      <ul v-for="item in itemList" :key="item.id">
        <li class="my-2 d-flex justify-content-between align-items-center">{{ item.title }}
          <button class="red" @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="bg-blue py-2 px-2 text-white">There are no item in your basket!</p>
    </div>
    <hr>
    <div class="d-flex justify-content-end my-2">
      <small class="text-red">There are {{ itemCount }} items in your basket.</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(response => {
      console.log(response);
      this.itemList = response.data || [];
    })
  },
  methods: {
    saveItem(event) {
      const saveObject = {
        title: event.target.value,
        createdAt: new Date(),
        completed: false
      }
      axios.post("http://localhost:3000/items", saveObject).then(response => {
        console.log(response);
        this.itemList.push(response.data);
      }
      );
      event.target.value = "";
      event.target.focus();
    },
    removeItem(id) {
      axios.delete(`http://localhost:3000/items/${id}`).then(response => {
        console.log(response);
        this.itemList = this.itemList.filter(product => product.id != id);
      })
    }
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    }
  }
}
</script>