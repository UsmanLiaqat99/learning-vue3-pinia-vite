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
import { reactive, computed, watch, onMounted, ref, nextTick } from 'vue';
import { vFocus } from '../directives/vAutoFocus'

const appTitleRef = ref(null)

const counterData = reactive({
  count: 0,
  title: "My Counter"
})

watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount === 20) {
    alert("You touch the maximum")
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  else return 'odd'
})

const increaseCounter = async (amount) => {
  counterData.count += amount
  await nextTick(() => {
    console.log("Do something when increase counter is updated in dom")
  })
}

const decreaseCounter = (amount) => {
  counterData.count -= amount
}

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}px wide!`)
})

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