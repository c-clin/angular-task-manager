import { TodoService } from './todo.services';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  message = 'What is your main focus today?';
  todoTextInput: string;
  @ViewChild('todoTextInputRef') textInput: ElementRef;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  addNewTodo() {
    this.todoService.addNewTodo(this.textInput.nativeElement.value);
    this.textInput.nativeElement.value = '';
    this.todoTextInput = '';
  }

}
