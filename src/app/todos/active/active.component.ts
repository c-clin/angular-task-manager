import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './../todo.model';
import { TodoService } from './../todo.services';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
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

export class ActiveComponent implements OnInit, OnDestroy {
  activeTodos: Todo[];
  activeNewTodoInput: string;
  originalInput: string;
  private subscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.activeTodos = this.todoService.getActiveTodos();
    this.subscription = this.todoService.activeTodosChanged.subscribe((todos: Todo[]) => {
      this.activeTodos = todos;
    });
  }

  updateActiveTodos() {
    this.activeTodos = this.todoService.getActiveTodos();
  }

  onRemoveTodo(task: string) {
    this.todoService.removeActiveAndCompletedTodo(task);
    this.updateActiveTodos();
  }

  onEditTodo(index: number) {
    this.activeTodos[index].edit = true;
    this.activeNewTodoInput = this.activeTodos[index].task;
    this.originalInput = this.activeNewTodoInput;
  }

  onCancelEdit(index: number) {
    this.activeTodos[index].edit = false;
  }

  onSaveEdit(index: number) {
    this.todoService.updateActiveAndCompletedTodo(this.originalInput, this.activeNewTodoInput);
    this.updateActiveTodos();
    this.activeTodos[index].edit = false;
  }

  onClickingCheckbox(task: string) {
    this.todoService.checkActiveAndCompleteCheckbox(task);
    this.updateActiveTodos();
  }

  onStar(index: number) {
    this.todoService.toggleActiveAndCompletedStar(this.activeTodos[index].task);
    this.updateActiveTodos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
