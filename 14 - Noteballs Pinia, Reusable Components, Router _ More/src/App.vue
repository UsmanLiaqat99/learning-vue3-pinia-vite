<template>
  <NavBar />
  <div class="container is-max-desktop py-4">
    <router-view />
  </div>
</template>

<script setup>
// imports
import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
