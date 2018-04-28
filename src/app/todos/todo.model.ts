export class Todo {
    public task: string;
    public completed;
    public edit;

    constructor(task: string, completed, edit) {
        this.task = task;
        this.completed = completed;
        this.edit = edit;
    }
}
