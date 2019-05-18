import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  constructor(private expensesService: ExpensesService) {}

  public expenses$: Observable<any>;

  ngOnInit() {
    this.expenses$ = this.expensesService.getHotels();
  }
}
