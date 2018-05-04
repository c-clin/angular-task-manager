import { EventEmitter, OnInit } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService implements OnInit {
    todosChanged = new EventEmitter<Todo[]>();
    activeTodosChanged = new EventEmitter<Todo[]>();
    completedTodosChanged = new EventEmitter<Todo[]>();

    // made the todos private so it cannot be accessed from outside
    private todos: Todo[] = [
        new Todo('Clean my room', false, false, false),
        new Todo('Feed my cats', true, false, false),
        new Todo('Sign up and log in to my account to save my list!', false, false, true),
        new Todo('Buy some oranges', true, false, false),
        new Todo('Watch the new Avengers movie', false, false, true)
    ];

    private active: Todo[];

    private completed: Todo[];

    ngOnInit() {

    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
        console.log(this.todos);
        this.todosChanged.emit(this.todos.slice());
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
        this.todos.push(new Todo(todo, false, false, false));
        this.todosChanged.emit(this.todos.slice());
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
                return this.todosChanged.emit(this.todos.slice());
            }
        }
    }

    updateTodo(index: number, text: string) {
        this.todos[index].task = text;
        this.todosChanged.emit(this.todos.slice());
    }

    updateActiveAndCompletedTodo(oldTask: string, newTask: string) {
        for (const todo of this.todos) {
            if (todo.task === oldTask) {
                const index = this.todos.indexOf(todo);
                this.todos[index].task = newTask;
                return this.todosChanged.emit(this.todos.slice());
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
                return this.todosChanged.emit(this.todos.slice());
            }
        }
    }

    toggleStar(index: number) {
        this.todos[index].star = !this.todos[index].star;
        this.todosChanged.emit(this.todos.slice());

    }

    toggleActiveAndCompletedStar(text: string) {
        for (const todo of this.todos) {
            if (todo.task === text) {
                todo.star = !todo.star;
                return this.todosChanged.emit(this.todos.slice());
            }
        }
    }
}

