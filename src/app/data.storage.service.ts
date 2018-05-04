import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoService } from './todos/todo.services';
import { AuthService } from './auth.service';
import { Todo } from './todos/todo.model';
import { map } from 'rxjs/operators';



@Injectable()
export class DataStorageService {

    constructor(private http: Http,
                private todoService: TodoService,
                private authService: AuthService) {}

    storeTodos() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-todo-list-c67bc.firebaseio.com/todos.json?auth=' + token, this.todoService.getTodos());
    }

    getTodos() {
        const token = this.authService.getToken();
        this.http.get('https://ng-todo-list-c67bc.firebaseio.com/todos.json?auth=' + token)
            // returns this empty task if the list in the database is empty to prevent error
            .pipe(map(
                (response: Response) => {
                    const todos: Todo[] = response.json();
                    if (!todos) {
                        const todo = [new Todo('Your todo list is empty!', false, false, false)];
                        return todo;
                    }
                    return todos;
                }
            ))
            .subscribe(
                (todos: Todo[]) => {
                    this.todoService.setTodos(todos);
                },
                (error) => alert('error')
            );
    }
}
