import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ActiveComponent } from './todos/active/active.component';
import { CompletedComponent } from './todos/completed/completed.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './todos/navigation/navigation.component';
import { DataStorageService } from './data.storage.service';
import { TodoService } from './todos/todo.services';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './header/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ActiveComponent,
    CompletedComponent,
    NavigationComponent,
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TodoService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
