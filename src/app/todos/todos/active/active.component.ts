import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../todo.model';
import { TodoService } from './../../todo.services';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  activeTodos: Todo[];
  activeNewTodoInput: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.activeTodos = this.todoService.getActiveTodos();
    this.todoService.todosChanged.subscribe((todos: Todo[]) => {
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
  }

  onCancelEdit(index: number) {
    this.activeTodos[index].edit = false;
  }

  onSaveEdit(index: number) {
    this.todoService.updateTodo(index, this.activeNewTodoInput);
    this.activeTodos[index].edit = false;
  }

  onClickingCheckbox(task: string) {
    this.todoService.checkActiveAndCompleteCheckbox(task);
    this.updateActiveTodos();
  }
}
