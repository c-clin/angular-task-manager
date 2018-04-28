import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from './todos/todo.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'My Todo App';
  todoTextInput: string;
  @ViewChild('todoTextInput') textInput: ElementRef;

  constructor(private todoService: TodoService) { }


  addNewTodo() {
    this.todoService.addNewTodo(this.textInput.nativeElement.value);
    console.log(this.textInput.nativeElement.value);
  }

}
