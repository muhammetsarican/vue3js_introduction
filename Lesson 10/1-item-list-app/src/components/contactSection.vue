<script setup>
defineProps({
  contact:Object
})
</script>
<template>
  <section id="bill-info" class="">
    <app-heading :title="'Bill Info'" />
    <section id="customer-info" class="flex gap-3 flex-col p-3">
      <div class="flex gap-1 flex-col">
        <label for="name" class="text-gray-600 text-sm">Customer Name</label>
        <input
          type="text"
          name=""
          id="name"
          class="bg-gray-800 rounded-sm px-3 py-1"
          v-model="contact.contact_name"
        />
      </div>
      <div class="flex gap-1 flex-col">
        <label for="mail" class="text-gray-600 text-sm">E-mail</label>
        <input
          type="text"
          name=""
          id="mail"
          class="bg-gray-800 rounded-sm px-3 py-1"
          v-model="contact.email"
        />
      </div>
      <div id="address-info" class="grid gap-5 grid-cols-3">
        <div class="flex gap-1 flex-col">
          <label for="mail" class="text-gray-600 text-sm">City</label>
          <input
            type="text"
            name=""
            id="mail"
            class="bg-gray-800 rounded-sm px-3 py-1"
            v-model="contact.city"
          />
        </div>
        <div class="flex gap-1 flex-col">
          <label for="mail" class="text-gray-600 text-sm">Postal Code</label>
          <input
            type="text"
            name=""
            id="mail"
            class="bg-gray-800 rounded-sm px-3 py-1"
            v-model="contact.zipcode"
          />
        </div>
        <div class="flex gap-1 flex-col">
          <label for="mail" class="text-gray-600 text-sm">Country</label>
          <input
            type="text"
            name=""
            id="mail"
            class="bg-gray-800 rounded-sm px-3 py-1"
            v-model="contact.country"
          />
        </div>
      </div>
    </section>
  </section>
</template>