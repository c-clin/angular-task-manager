import { TodoService } from './../todo.services';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
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
export class AllComponent implements OnInit {
  todos: Todo[];
  newTodoInput: string;
  filterText = '';
  state = 'starred';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.todosChanged.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
    this.todoService.getActiveTodos();
    this.todoService.getCompletedTodos();
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
  }

  onStar(index: number) {
    this.todoService.toggleStar(index);
    this.state === 'starred' ? this.state = 'normal' : this.state = 'starred';
  }

  // animationStarted(event) {
  //   console.log(event);
  // }

  // animationEnded(event) {
  //   console.log(event);
  // }
}
