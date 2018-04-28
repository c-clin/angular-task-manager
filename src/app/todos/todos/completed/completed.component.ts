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
  completedNewTodoInput: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

  updateCompletedTodos() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

  onRemoveTodo(task: string) {
    console.log(task);
    this.todoService.removeActiveAndCompletedTodo(task);
    this.updateCompletedTodos();
  }

  onEditTodo(index: number) {
    this.completedTodos[index].edit = true;
    this.completedNewTodoInput = this.completedTodos[index].task;
  }

  onCancelEdit(index: number) {
    this.completedTodos[index].edit = false;
  }

  onSaveEdit(index: number) {
    this.todoService.updateTodo(index, this.completedNewTodoInput);
    this.completedTodos[index].edit = false;
  }

  onClickingCheckbox(task: string) {
    this.todoService.checkActiveAndCompleteCheckbox(task);
    this.updateCompletedTodos();
  }
}
