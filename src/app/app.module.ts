import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ActiveComponent } from './todos/active/active.component';
import { CompletedComponent } from './todos/completed/completed.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './todos/navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './header/signup/signup.component';
import { AllComponent } from './todos/all/all.component';
import { DataStorageService } from './data.storage.service';
import { TodoService } from './todos/todo.services';
import { AuthService } from './auth.service';

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ActiveComponent,
    CompletedComponent,
    NavigationComponent,
    HeaderComponent,
    SignupComponent,
    AllComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
