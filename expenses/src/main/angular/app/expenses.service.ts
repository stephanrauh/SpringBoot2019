import {Injectable, Input} from '@angular/core';
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
           // tap(x => console.log(x)),
          map((response: any) => response._embedded.expenses),
          // tap(y => console.log(y)),
          map((expenses: Array<any>) => expenses.map(expenseElement => this.extractId(expenseElement))),
           // tap(exp => console.log(exp)),
          tap(exp => this.listOfExpenses = exp)
        );
    } else {
      return of(this.listOfExpenses);
    }
  }

  private extractId(e: any): Expense {
    const hotel = e.hotel;
    const amount = e.amount;
    const link: string = e._links.expense.href;
    const pos = link.lastIndexOf('/');
    const id = link.substr(pos + 1);
    return {
      id: Number(id),
      hotel,
      amount
    };
  }

  public postHotel(postExpense: { id: number; hotel: string; amount: number }): void {
    const body = postExpense;
    this.http.post('http://localhost:5000/expenses', body ).subscribe(
      (x) => {
        console.log(x); // x already contains the new id --> we can optimize the remaining code
        this.listOfExpenses = []; // force the reload
        this.getHotels().subscribe(); // reload list of hotels
      },
      error => console.log(error)
    );
  }

  public patch(patchExpense: { id: number; hotel: string; amount: number }): void {
    const body = patchExpense;
    this.http.patch('http://localhost:5000/expenses' + '/' + patchExpense.id, body )

      .subscribe(
      (x) => {
        console.log(x); // x already contains the new id --> we can optimize the remaining code
        this.listOfExpenses = []; // force the reload
        this.getHotels().subscribe(); // reload list of hotels
      },
      error => console.log(error)
    );
}

  public save(expense: { id: number; hotel: string; amount: number }): void {
    if (expense.id) {
      // this.currentExpense.hotel = expense.hotel;
      // this.currentExpense.amount = expense.amount;

      this.patch(expense);
    } else {
      // if (this.listOfExpenses.length === 0) {
      //   expense.id = 1;
      // } else {
      //   const ids = this.listOfExpenses.map(e => e.id);
      //
      //   const newId = 1 + Math.max(...ids);
      //   expense.id = newId;
      // }
      // this.listOfExpenses.push(expense);

      this.postHotel(expense);

    }
    console.log(expense);


  }

  editItem(itemExpense: Expense): void {
      this.currentExpense = itemExpense;
    // this.listOfExpenses.push(itemExpense);
  }
}
