import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui id aliquid magnam odio distinctio laudantium delectus dolores asperiores facere? Explicabo accusamus veritatis dolor iste ad eaque quas non laboriosam?",
        },
        {
          id: "id2",
          content: "This is a shorter note! WOO!",
        },
      ],
    };
  },

  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();
      let note = {
        id: id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id != id;
      });
    },
  },
});
