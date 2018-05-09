import { Subject } from 'rxjs';
import { EventEmitter, OnInit } from '@angular/core';
import { Todo } from './todo.model';


export class TodoService implements OnInit {
    todosChanged = new Subject<Todo[]>();
    activeTodosChanged = new Subject<Todo[]>();

    // made the todos private so it cannot be accessed from outside
    private todos: Todo[] = [
        new Todo('Clean my room', false, false, false, new Date(2018, 0, 27, 10, 40)),
        new Todo('Feed my cats', true, false, false, new Date(2018, 1, 29, 16, 20)),
        new Todo('Sign up and log in to my account to save my list!', false, false, true, new Date(2018, 4, 3, 8, 28)),
        new Todo('Buy some oranges', true, false, false, new Date(2018, 4, 20, 6, 9)),
        new Todo('Watch the new Avengers movie', false, false, true, new Date(2018, 5, 20, 15, 37))
    ];

    private active: Todo[];

    private completed: Todo[];

    ngOnInit() {

    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
        console.log(this.todos);
        this.todosChanged.next(this.todos.slice());
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
        this.todos.push(new Todo(todo, false, false, false, new Date()));
        this.todosChanged.next(this.todos.slice());
        this.activeTodosChanged.next(this.getActiveTodos());
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
        this.todosChanged.next(this.todos.slice());
    }

    removeActiveAndCompletedTodo(task: string) {
        for (const todo of this.todos) {
            if (todo.task === task) {
                const index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
                return this.todosChanged.next(this.todos.slice());
            }
        }
    }

    updateTodo(index: number, text: string) {
        this.todos[index].task = text;
        this.todosChanged.next(this.todos.slice());
    }

    updateActiveAndCompletedTodo(oldTask: string, newTask: string) {
        for (const todo of this.todos) {
            if (todo.task === oldTask) {
                const index = this.todos.indexOf(todo);
                this.todos[index].task = newTask;
                return this.todosChanged.next(this.todos.slice());
            }
        }
    }

    checkCheckbox(index: number) {
        this.todos[index].completed = !this.todos[index].completed;
        this.todosChanged.next(this.todos.slice());
    }

    checkActiveAndCompleteCheckbox(task: string) {
        for (const todo of this.todos) {
            if (todo.task === task) {
                todo.completed = !todo.completed;
                return this.todosChanged.next(this.todos.slice());
            }
        }
    }

    toggleStar(index: number) {
        this.todos[index].star = !this.todos[index].star;
        this.todosChanged.next(this.todos.slice());

    }

    toggleActiveAndCompletedStar(text: string) {
        for (const todo of this.todos) {
            if (todo.task === text) {
                todo.star = !todo.star;
                return this.todosChanged.next(this.todos.slice());
            }
        }
    }
}
