import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.services';
import { Todo } from './../todo.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0) translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(500, style({
          transform: 'translateX(150px)',
          opacity: 0
        }))
      ])
    ]),
  ]
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

  onStar(index: number) {
    this.todoService.toggleActiveAndCompletedStar(this.completedTodos[index].task);
    this.updateCompletedTodos();
  }
}
