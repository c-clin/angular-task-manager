import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjRCP5HrNf5jZWKq8l6OzXgtfow2OBc50',
      authDomain: 'ng-todo-list-c67bc.firebaseapp.com'
    });
  }



}
