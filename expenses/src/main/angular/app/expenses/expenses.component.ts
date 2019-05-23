import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Observable } from 'rxjs';
import {Expense} from './expense';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  constructor(private expensesService: ExpensesService, private router: Router) {}

  public expenses$: Observable<Array<Expense>>;

  ngOnInit() {
    this.expenses$ = this.expensesService.getHotels();

  }

  onEdit(expense: Expense) {
    this.expensesService.editItem(expense);
    this.router.navigate(['/eingabe']);
  }
}
