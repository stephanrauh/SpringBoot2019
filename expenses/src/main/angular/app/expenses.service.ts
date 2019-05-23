import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Expense} from './expenses/expense';

@Injectable()
export class ExpensesService {
  public listOfExpenses: Array<Expense> = [];
  public currentExpense: Expense;
  constructor(private http: HttpClient) {}

  public getHotels(): Observable<Array<Expense>> {
    if (this.listOfExpenses.length === 0) {
    return this.http.get('http://localhost:5000/expenses')
      .pipe(
        tap(x => console.log(x)),
        map((response: any) => response._embedded.expenses),
        tap(exp => this.listOfExpenses = exp)
      );
    } else {
      return of(this.listOfExpenses);
    }
  }

  public save(currentExpense: { id: number; hotel: string; amount: number }): void {
    this.listOfExpenses.push(currentExpense);
    console.log(currentExpense);
  }

  editItem(itemExpense: Expense): void {
    this.currentExpense = itemExpense;
  }
}
