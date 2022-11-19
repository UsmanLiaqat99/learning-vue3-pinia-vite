<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add new Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" :key="i" class="card mb-4">
      <div class="card-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui id
        aliquid magnam odio distinctio laudantium delectus dolores asperiores
        facere? Explicabo accusamus veritatis dolor iste ad eaque quas non
        laboriosam?
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
