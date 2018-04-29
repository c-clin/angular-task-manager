export class Todo {
    public task: string;
    public completed;
    public edit;
    public star;

    constructor(task: string, completed, edit, star) {
        this.task = task;
        this.completed = completed;
        this.edit = edit;
        this.star = star;
    }
}
