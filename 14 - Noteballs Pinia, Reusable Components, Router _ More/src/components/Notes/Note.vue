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
      <a
        href="#"
        class="card-footer-item"
        @click="storeNotes.deleteNote(note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { useStoreNotes } from "../../stores/storeNotes";

const storeNotes = useStoreNotes();

// Props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
</script>
