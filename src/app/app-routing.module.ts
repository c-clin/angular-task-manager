import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { ActiveComponent } from './todos/active/active.component';
import { CompletedComponent } from './todos/completed/completed.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: TodosComponent},
  { path: 'active', component: ActiveComponent },
  { path: 'completed', component: CompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
