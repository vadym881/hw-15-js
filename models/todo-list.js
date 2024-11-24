export class TodoList {
  tasksList;
  constructor() {
    this.tasksList = [];
  }

  addTask(task) {
    if (this.isExists(task.title)) return;
    this.tasksList.push(task);
  }

  deleteTask(title) {
    if (!this.isExists(title)) return;
    const task = this.findTaskByTitle(title);
    const index = this.tasksList.indexOf(task);
    this.tasksList.splice(index, 1);
  }

  updateTask(title, content) {
    if (!this.isExists(title)) return;
    if (!content) return;
    const task = this.findTaskByTitle(title);
    task.content = content;
    task.updateDate = new Date();
  }

  completeTask(title) {
    if (!this.isExists(title)) return;
    const task = this.findTaskByTitle(title);
    task.isCompleted = true;
  }

  isExists(title) {
    return this.tasksList.find((task) => task.title === title) !== undefined;
  }

  findTaskByTitle(title) {
    if (!this.isExists(title)) {
      console.log(`Task "${title}" is undefined`);
      return;
    }
    return this.tasksList.find((task) => task.title === title);
  }

  getTasksAmount() {
    return this.tasksList.length;
  }

  getNotCompletedTasksAmount() {
    return this.tasksList.filter((a) => a.isCompleted === false).length;
  }

  sortTasksByCompletion(completed = true) {
    completed
      ? this.tasksList.sort((a, b) => a.isCompleted - b.isCompleted)
      : this.tasksList.sort((a, b) => b.isCompleted - a.isCompleted);
  }

  sortTasksByUpdateDate(ascending = true) {
    ascending
      ? this.tasksList.sort((a, b) => a.updateDate - b.updateDate)
      : this.tasksList.sort((a, b) => b.updateDate - a.updateDate);
  }

  printTasks() {
    this.tasksList.forEach((a) => a.printTask());
  }
}
