import { TodoService } from './../todo.services';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
  }

}
