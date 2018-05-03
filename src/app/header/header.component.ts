import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { DataStorageService } from './../data.storage.service';
import { TodoService } from '../todos/todo.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'Anguar Task Manager';
  authStatus;
  subscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.subscription = this.authService.authentication
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
          alert('You have successfully saved your list!');
        },
        (error) => alert(error)
      );
  }

  onLogout() {
    this.authService.logout();
    this.todoService.clearTodos();
  }

  onFetchList() {
    this.dataStorageService.getTodos();
  }

  // unsubscribe to prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
