export class Todo {
    public task: string;
    public completed;

    constructor(task: string, completed) {
        this.task = task;
        this.completed = completed;
    }
}
