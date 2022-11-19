<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <router-link to="/" class="navbar-item" active-class="is-active">
            Notes
          </router-link>

          <router-link to="/stats" class="navbar-item" active-class="is-active">
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// imports
import { ref } from "vue";

// Mobile Nav
const showMobileNav = ref(false);
</script>

<style scoped>
@media (max-width: 1024px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
} ;
</style>
