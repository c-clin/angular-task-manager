import { EventEmitter } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService {
    todosChanged = new EventEmitter<Todo[]>();
    // made the todos private so it cannot be accessed from outside
    private todos: Todo[] = [
        new Todo('Clean my room', false, false),
        new Todo('Feed my cats', false, false)
    ];

    getTodos() {
        return this.todos.slice();
    }

    addNewTodo(todo: string) {
        this.todos.push(new Todo(todo, false, false));
        this.todosChanged.emit(this.todos.slice());
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
        this.todosChanged.emit(this.todos.slice());
    }

    updateTodo(index: number, text: string) {
        console.log(text);
        this.todos[index].task = text;
        this.todosChanged.emit(this.todos.slice());
    }

    checkCheckbox(index: number) {
        this.todos[index].completed = !this.todos[index].completed;
        this.todosChanged.emit(this.todos.slice());
    }



}
