<template>
  <app-header />
  <div class="container">
    <h3>I am working on vue js...</h3>
    <p>Da ye no whu I am</p>
  </div>
  <CounterItem />
  <counter-item />
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";

export default {
  components: {
    CounterItem: CounterItem,
  }
}
</script>

<style></style>