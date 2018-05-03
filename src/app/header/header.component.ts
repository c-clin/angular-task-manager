import { Component, OnInit, Output } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { DataStorageService } from './../data.storage.service';
import { TodoService } from '../todos/todo.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Anguar Todo App';
  authStatus;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.authService.authentication
      .subscribe(
        (auth: boolean) => {
          this.authStatus = auth;
        }
      );
  }

  onSignin(form: NgForm) {
    const email = form.value.signinEmail;
    const password = form.value.signinPassword;
    this.authService.signinUser(email, password);
  }

  onSaveList() {
    this.dataStorageService.storeTodos()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onLogout() {
    this.authService.logout();
    this.todoService.clearTodos();
  }

  onFetchList() {
    this.dataStorageService.getTodos();
  }
}
