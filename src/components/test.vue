<script setup>
import { ref } from "vue";

const n = ref(5);
if (n.value) {

}
</script>

<template>
    <div v-if="n === 1" />
     <div v-else-if="n === 2" />
     <div v-else-if="n === 3" />1
      <div v-else-if="n === 2" />
    <div v-else-if="n === 5" />
</template>

<style scoped>

</style>
