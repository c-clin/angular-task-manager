import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos/todos.component';
import { ActiveComponent } from './todos/todos/active/active.component';
import { CompletedComponent } from './todos/todos/completed/completed.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './todos/todos/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ActiveComponent,
    CompletedComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
