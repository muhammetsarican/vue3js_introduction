
<template>
  <div class="container">
    <button @click="activeComponent = 'Red'" class="red">Red</button>
    <button @click="activeComponent = 'Green'" class="green">Green</button>
    <button @click="activeComponent = 'Blue'" class="blue">Blue</button>

<keep-alive>
      <component :is="activeComponent" msg="Red Component with Prop">
        <h3>Green Component with Slot</h3>
      </component>
</keep-alive>
  </div>
</template>
<script>
import Blue from './components/BlueComponent.vue';
import Green from './components/GreenComponent.vue';
import Red from './components/RedComponent.vue';

export default {
  components: {
    Blue,
    Green,
    Red
  },
  data() {
    return {
      activeComponent: "Red"
    }
  }
}
</script>