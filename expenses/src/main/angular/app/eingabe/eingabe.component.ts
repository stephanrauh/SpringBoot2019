import { Component, OnInit } from '@angular/core';
import {ExpensesService} from '../expenses.service';
import {Expense} from '../expenses/expense';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.css']
})
export class EingabeComponent implements OnInit {
 hide = true;
  public canBeSaved = false;
 public addressForm: FormGroup;
//   public addressForm = this.fb.group({
//     id: null,
//     hotel: [null, Validators.required],
//     amount: [null, Validators.required]
//   });

  // public addressForm = this.fb.group({
  //   id: null,
  //   hotel: [null, Validators.required],
  //   amount: [null, Validators.required]
  // });
  public expense: Expense = {
    id: undefined,
    hotel: '',
    amount: undefined
  };

  constructor(private expensesService: ExpensesService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    // debugger;
    this.addressForm = this.fb.group({
      id: this.expensesService.currentExpense ? this.expensesService.currentExpense.id : null,
      hotel: this.expensesService.currentExpense ? this.expensesService.currentExpense.hotel : null,
      amount: this.expensesService.currentExpense ? this.expensesService.currentExpense.amount : null
    });

  this.addressForm.valueChanges.subscribe(value => {
      console.log(JSON.stringify(value));
      let isValid = true;
      if (!value.id) {
        isValid = false;
      }
      if (!value.hotel) {
        isValid = false;
      }
      if (!value.amount) {
        isValid = false;
      }
      this.canBeSaved = isValid;
    });
  }

  onSubmit() {
    this.expensesService.save(this.addressForm.value);
    this.router.navigate(['/expenses']);
  }

  cancel() {
    this.expense.id = undefined;
    this.expense.hotel = '';
    this.expense.amount = undefined;
    this.router.navigate(['/expenses']);
  }

}
