<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// ref
// const counter = ref(0),
// const counterTitle = ref('My Counter')

// reactive
const counterData = reactive({
  count: 0,
  title: "My Counter"
})

const increaseCounter = () => {
  counterData.count++
}

const decreaseCounter = () => {
  if (counterData.count > 0) {
    counterData.count--
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>