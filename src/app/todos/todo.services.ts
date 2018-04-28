import { EventEmitter, OnInit } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService implements OnInit {
    todosChanged = new EventEmitter<Todo[]>();
    // made the todos private so it cannot be accessed from outside
    private todos: Todo[] = [
        new Todo('Clean my room', false, false),
        new Todo('Feed my cats', false, false)
    ];

    private active: Todo[];

    private completed: Todo[];

    ngOnInit() {
    }

    getTodos() {
        return this.todos.slice();
    }

    getActiveTodos() {
        this.active = this.todos.filter(
            todo => todo.completed === false
        );
        return this.active.slice();
    }

    getCompletedTodos() {
        this.completed = this.todos.filter(
            todo => todo.completed === true
        );
        return this.completed.slice();
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
        this.getActiveTodos();
        this.todosChanged.emit(this.todos.slice());
    }



}
