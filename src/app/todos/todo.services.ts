import { EventEmitter } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService {
    todosChanged = new EventEmitter<Todo[]>();
    private todos: Todo[] = [
        new Todo('Clean my room', false),
        new Todo('Feed my cats', false)
    ];

    getTodos() {
        return this.todos.slice();
    }

    addNewTodo(todo: string) {
        this.todos.push(new Todo(todo, false));
        this.todosChanged.emit(this.todos.slice());
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
        this.todosChanged.emit(this.todos.slice());
    }



}
