import { TodoService } from './../../todo.services';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

}
