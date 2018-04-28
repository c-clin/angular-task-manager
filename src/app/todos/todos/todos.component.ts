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
  newTodoInput: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todosChanged.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  onRemoveTodo(index: number) {
    this.todoService.removeTodo(index);
  }

  onEditTodo(index: number) {
    this.todos[index].edit = true;
    this.newTodoInput = this.todos[index].task;
  }

  onCancelEdit(index: number) {
    this.todos[index].edit = false;
  }

  onSaveEdit(index: number) {
    this.todoService.updateTodo(index, this.newTodoInput);
    this.todos[index].edit = false;
  }

  onClickingCheckbox(index: number) {
    this.todoService.checkCheckbox(index);
    console.log(this.todos);
  }
}
