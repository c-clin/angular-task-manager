import { DataStorageService } from './../data.storage.service';
import { Component, OnInit, Output } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Anguar Todo App';
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

  }

  onSignup() {

  }

  onSaveList() {
    this.dataStorageService.storeTodos()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchList() {
    this.dataStorageService.getTodos();
  }
}
