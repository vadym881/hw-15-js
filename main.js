import { Task } from "./models/task.js";
import { TodoList } from "./models/todo-list.js";

const tasks = new TodoList();

for (let i = 0; i <= 10; i++) {
  let task = {};
  i % 2 === 0
    ? (task = new Task(`task${i}`))
    : (task = new Task(`task${i}`, "my content"));
  tasks.addTask(task);
}

tasks.updateTask("task0", "Finish homework");
tasks.completeTask("task0");
tasks.completeTask("task4");
tasks.completeTask("task7");
tasks.sortTasksByCompletion(false);
tasks.sortTasksByUpdateDate();
tasks.printTasks();
tasks.updateTask("task2", "");
tasks.findTaskByTitle("task2").printTask();
