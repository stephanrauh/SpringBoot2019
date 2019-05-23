import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Observable } from 'rxjs';
import {Expense} from './expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  constructor(private expensesService: ExpensesService) {}

  public expenses$: Observable<Array<Expense>>;

  ngOnInit() {
    this.expenses$ = this.expensesService.getHotels();

  }

  onEdit(expense: Expense) {
    this.expensesService.editItem(expense);
  }
}
