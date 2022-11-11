<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>

<!-- Composition APi -->
<script setup>
import { ref } from 'vue';

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  if (counter.value > 0) {
    counter.value--
  }
}
</script>

<!-- Option Api -->
<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter--
      }
    }
  }
}
</script> -->

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
</style>