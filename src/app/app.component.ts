import { TodoService } from './todos/todo.services';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'What is your main focus today?';
  todoTextInput: string;
  @ViewChild('todoTextInputRef') textInput: ElementRef;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }

  addNewTodo() {
    this.todoService.addNewTodo(this.textInput.nativeElement.value);
    this.textInput.nativeElement.value = '';
    this.todoTextInput = '';
  }

}
