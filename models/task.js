export class Task {
  isCompleted;
  initDate;
  updateDate;
  constructor(title, content = "no-content") {
    this.title = title;
    this.content = content;
    this.isCompleted = false;
    this.initDate = new Date();
    this.updateDate = null;
  }

  printTask() {
    console.log(this.title);
    console.log(this.content);
    console.log(this.isCompleted);
    console.log(this.initDate.toISOString());
    if (this.updateDate) console.log(this.updateDate.toISOString());
    console.log(`\n`);
  }
}
