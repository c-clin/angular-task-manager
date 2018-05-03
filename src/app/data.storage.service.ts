import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoService } from './todos/todo.services';
import { AuthService } from './auth.service';
import { Todo } from './todos/todo.model';



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
            .subscribe(
                (response: Response) => {
                    const todos: Todo[] = response.json();
                    this.todoService.setTodos(todos);
                },
                (error) => alert(error)
            );
    }
}
