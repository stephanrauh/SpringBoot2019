import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EingabeComponent} from './eingabe/eingabe.component';
import {ExpensesComponent} from './expenses/expenses.component';

const routes: Routes = [
  { path: 'eingabe', component: EingabeComponent},
  { path: 'expenses', component: ExpensesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
