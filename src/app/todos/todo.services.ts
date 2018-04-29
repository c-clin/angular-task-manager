import { EventEmitter, OnInit } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService implements OnInit {
    todosChanged = new EventEmitter<Todo[]>();
    activeTodosChanged = new EventEmitter<Todo[]>();
    completedTodosChanged = new EventEmitter<Todo[]>();

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
        // console.log('get active todos active is ' + this.active);
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
        console.log('active is ' + this.active);
        this.activeTodosChanged.emit(this.active.slice());
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
        this.todosChanged.emit(this.todos.slice());
    }

    removeActiveAndCompletedTodo(task: string) {
        for (const todo of this.todos) {
            if (todo.task === task) {
                const index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            }
        }
        this.todosChanged.emit(this.todos.slice());
    }

    updateTodo(index: number, text: string) {
        // 1. updated the task name on todo list
        this.todos[index].task = text;
        this.todosChanged.emit(this.todos.slice());
        console.log('todo is ' + this.todos, 'activeTodos is ' + this.active, 'completedTodos is ' + this.completed);
    }

    updateActiveAndCompletedTodo(oldTask: string, newTask: string) {
        // given the index on active
        for (const todo of this.todos) {
            if (todo.task === oldTask) {
                const index = this.todos.indexOf(todo);
                this.todos[index].task = newTask;
                this.todosChanged.emit(this.todos.slice());
            }
        }
    }

    checkCheckbox(index: number) {
        this.todos[index].completed = !this.todos[index].completed;
        this.todosChanged.emit(this.todos.slice());
    }

    checkActiveAndCompleteCheckbox(task: string) {
        for (const todo of this.todos) {
            if (todo.task === task) {
                todo.completed = !todo.completed;
            }
        }
        this.todosChanged.emit(this.todos.slice());
    }
}

// TODOS:
