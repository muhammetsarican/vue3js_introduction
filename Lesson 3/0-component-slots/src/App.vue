<template>
  <ModalComponent>
    <template #title>
      <h3>Title that coming with slot</h3>
    </template>

    <template v-slot:body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta animi error unde sit libero nemo molestias tempora. Officiis odit consequatur maiores placeat dicta, porro beatae rerum similique alias quidem fugiat blanditiis minus id cumque tempora, eum aspernatur quibusdam optio ullam. Veniam voluptatibus quae odio facilis quaerat deserunt modi vero.
    </template>

    <template #default>
      This text shown as default.
    </template>
  </ModalComponent>
</template>
<script>
import ModalComponent from './components/ModalComponent.vue';

export default {
  components: {
    ModalComponent
  }
}
</script>
