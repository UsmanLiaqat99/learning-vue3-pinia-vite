<template>
  <div class="about">
    <h1>This is a detail page</h1>
    <p>Display the content of page with ID of <span>{{ $route.params.id }}</span>
      here!</p>

    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>

    <div>
      <button @click="goToFirstPost">Go to first Post</button>
    </div>

    <div>
      <button @click="goHomeIn3Sec">Go Home in 3 Seconds</button>
    </div>

    <p>
      <router-link to="/posts">&lt; Back</router-link>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`The ID of this Post is: ${route.params.id}`)
}

const goHomeIn3Sec = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}

</script>

<style scoped>
span {
  color: green;
  font-weight: bold;
  text-decoration: underline;
}
</style>