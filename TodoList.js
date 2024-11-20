export class TodoList {
  notes;
  constructor() {
    this.notes = {};
  }

  addNote(title, noteContent) {
    if (this.notes[title]) {
      console.log(`Note "${title}" already exists`);
      return;
    }
    this.notes[title] = noteContent;
  }

  deleteNote(title) {
    if (!this.notes[title]) {
      console.log(`Note "${title}" is undefined`);
      return;
    }
    delete this.notes[title];
  }

  editNote(title, newContent) {
    if (!this.notes[title]) {
      console.log(`Note "${title}" is undefined`);
      return;
    }
    this.notes[title] = newContent;
  }

  findNoteByName(title) {
    const noteContent = this.notes[title];
    if (!noteContent) {
      console.log(`Note "${title}" is undefined`);
      return null;
    }
    console.log(`Note "${title}": ${noteContent}`);
    return noteContent;
  }

  printNotes() {
    Object.entries(this.notes).forEach(([title, content]) => {
      console.log(`Title: ${title}, Content: ${content}`);
    });
  }
}
