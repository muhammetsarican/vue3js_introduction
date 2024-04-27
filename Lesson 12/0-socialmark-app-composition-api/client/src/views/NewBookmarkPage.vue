<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Add New</h3>
    <input
      autofocus
      ref="title"
      v-model="userData.title"
      type="text"
      placeholder="Title"
      class="input mb-3"
    />
    <input
      v-model="userData.url"
      type="text"
      placeholder="URL"
      class="input mb-3"
    />
    <select v-model="userData.categoryId" class="input mb-3">
      <option value="0" selected>Select a Category</option>
      <option
        v-for="category in categoryList"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <textarea
      v-model="userData.description"
      placeholder="Description"
      class="input mb-3"
      cols="30"
      rows="10"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button class="secondary-button">Cancel</button>
      <button class="default-button" @click="saveData">Save</button>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const appAxios = inject("appAxios");
const socket = inject("socket");
const store = useStore();
const router = useRouter();

const categoryList = ref([]);
const userData = ref({
  title: null,
  url: null,
  categoryId: null,
  description: null,
});

onMounted(() =>
  appAxios.get("/categories").then((getResponse) => {
    categoryList.value = getResponse.data;
  })
);

// Methods
const saveData = () => {
  const bookmark = {
    ...userData.value,
    userId: store.getters._getCurrentUser.value.id,
    createdAt: new Date(),
  };
  this.$appAxios.post("/bookmarks", bookmark).then((postResponse) => {
    Object.keys(userData.value)?.forEach(
      (field) => (userData.value[field] = null)
    );
    const socketData = {
      ...postResponse.data,
      user: store.getters._getCurrentUser.value,
      category: categoryList.value?.find(
        (category) => category.id === bookmark.categoryId
      ),
    };
    socket.emit("NEW_BOOKMARK_EVENT", socketData);
    router.push({ name: "HomePage" });
  });
};
</script>