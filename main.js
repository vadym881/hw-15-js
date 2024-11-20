import { TodoList } from "./TodoList.js";

const myNotes = new TodoList();
myNotes.addNote("schoolTest", "Prepare for the English test");
console.log(myNotes);
myNotes.editNote("schoolTest", "Prepare for the math test");
myNotes.addNote("jsHw", "Do the JavaScript 15th homework");
myNotes.printNotes()
myNotes.deleteNote("schoolTest");
myNotes.findNoteByName("jsHw")