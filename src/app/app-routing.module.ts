import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './todos/active/active.component';
import { CompletedComponent } from './todos/completed/completed.component';
import { TodosComponent } from './todos/todos.component';
import { SignupComponent } from './header/signup/signup.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: TodosComponent},
  { path: 'active', component: ActiveComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
