<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{
          note.content.length > 1
            ? note.content.length + " characters"
            : note.content.length + " character"
        }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click="handleDeleteClick">Delete</a>
    </footer>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

// Emits
const emit = defineEmits(["deleteClicked"]);

// Handle Delete Click
const handleDeleteClick = () => {
  emit("deleteClicked", props.note.id);
};
</script>
