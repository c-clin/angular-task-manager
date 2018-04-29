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
  originalInput: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.updateCompletedTodos();
  }

  updateCompletedTodos() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

  onRemoveTodo(task: string) {
    this.todoService.removeActiveAndCompletedTodo(task);
    this.updateCompletedTodos();
  }

  onEditTodo(index: number) {
    this.completedTodos[index].edit = true;
    this.completedNewTodoInput = this.completedTodos[index].task;
    this.originalInput = this.completedNewTodoInput;
  }

  onCancelEdit(index: number) {
    this.completedTodos[index].edit = false;
  }

  onSaveEdit(index: number) {
    console.log(this.originalInput, this.completedNewTodoInput);
    this.todoService.updateActiveAndCompletedTodo(this.originalInput, this.completedNewTodoInput);
    this.updateCompletedTodos();
    this.completedTodos[index].edit = false;
  }

  onClickingCheckbox(task: string) {
    this.todoService.checkActiveAndCompleteCheckbox(task);
    this.updateCompletedTodos();
  }
}
