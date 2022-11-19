<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add new Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        {{ note.content }}
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref } from "@vue/reactivity";

// Notes
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui id aliquid magnam odio distinctio laudantium delectus dolores asperiores facere? Explicabo accusamus veritatis dolor iste ad eaque quas non laboriosam?",
  },
  {
    id: "id2",
    content: "This is a shorter note! WOO!",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();
  let note = {
    id: id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
