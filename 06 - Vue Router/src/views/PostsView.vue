<template>
  <div class="about">
    <h1>Posts</h1>

    <ul>
      <li>
        <router-link to="/postDetail/id1">Post 1</router-link>
      </li>
      <li>
        <router-link to="/postDetail/id2">Post 2</router-link>
      </li>
      <li>
        <router-link to="/postDetail/id3">Post 3</router-link>
      </li>
    </ul>

    <input type="text" v-focus>
  </div>
</template>

<script setup>
import { vFocus } from '../directives/vAutoFocus'
</script>

<style scoped>
ul {
  margin: 20px 0px;
}
</style>