import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EingabeComponent} from './eingabe/eingabe.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {FormstyleComponent} from './formstyle/formstyle.component';
import {TablestyleComponent} from './tablestyle/tablestyle.component';

const routes: Routes = [
  { path: 'eingabe', component: EingabeComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'formstyle', component: FormstyleComponent},
  { path: '', redirectTo: '/expenses', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
