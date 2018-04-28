import { Todo } from './todo.model';


export class TodoService {

    private todos: Todo[] = [
        new Todo('Clean my room', false),
        new Todo('Feed my cats', false)
    ];

    getTodos() {
        return this.todos.slice();
    }

    addNewTodo(todo: string) {
        this.todos.push(new Todo(todo, false));
        console.log(this.todos);
    }



}
