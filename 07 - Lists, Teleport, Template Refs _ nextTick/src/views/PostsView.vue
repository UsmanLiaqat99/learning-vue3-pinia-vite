<template>
  <div class="about">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>

    <input type="text" v-focus>
  </div>
</template>

<script setup>
import { vFocus } from '../directives/vAutoFocus'
import { ref } from 'vue'

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
</style>