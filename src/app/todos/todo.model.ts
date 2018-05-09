export class Todo {
    public task: string;
    public completed;
    public edit;
    public star;
    public started;

    constructor(task: string, completed, edit, star, started) {
        this.task = task;
        this.completed = completed;
        this.edit = edit;
        this.star = star;
        this.started = started;
    }
}
