import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoService } from './todos/todo.services';
import { Todo } from './todos/todo.model';


@Injectable()
export class DataStorageService {

    constructor(private http: Http, private todoService: TodoService) {}

    storeTodos() {
       return this.http.put('https://ng-todo-list-c67bc.firebaseio.com/todos.json', this.todoService.getTodos());
    }

    getTodos() {
        this.http.get('https://ng-todo-list-c67bc.firebaseio.com/todos.json')
            .subscribe(
                (response: Response) => {
                    const todos: Todo[] = response.json();
                    this.todoService.setTodos(todos);
                }
            );
    }
}
