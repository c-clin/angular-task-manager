import { TodoService } from './../todo.services';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  editMode = false;
  newTodoInput: string;
  id: number;

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
    this.newTodoInput = this.todos[index].task;
    this.editMode = true;
    this.id = index;
  }

  onSaveEdit(index: number) {
    console.log('index is ' + this.id);
    console.log(this.newTodoInput);
    this.todoService.updateTodo(this.id, this.newTodoInput);
    this.editMode = false;
  }

  onClickingCheckbox(index: number) {
    this.todoService.checkCheckbox(index);
    console.log(this.todos);
  }
}
