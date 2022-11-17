<template>
  <div class="about">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>

    <input type="text" v-focus>

    <div>
      <button :class="{ 'yellow': counter.oddOrEven === 'odd' }" class="counter-button"
        @click="counter.increaseCounter(1)">{{
    counter.count
        }}</button>
    </div>
  </div>
</template>

<script setup>
import { vFocus } from '../directives/vAutoFocus'
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

const posts = ([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])

</script>

<style scoped>
ul {
  margin: 20px 0px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: lightgreen;
}

.counter-button.yellow {
  background-color: #ddd;
}
</style>