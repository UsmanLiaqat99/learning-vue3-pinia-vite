<template>
  <div class="home">
    <h3 ref="appTitleRef">{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-focus>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { vFocus } from '../directives/vAutoFocus'
import { useCounter } from '../use/useCounter';

const appTitleRef = ref(null)

const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}px wide!`);
});

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