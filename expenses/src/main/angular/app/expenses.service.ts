import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExpensesService {
  constructor(private http: HttpClient) {}

  public getHotels(): Observable<any> {
    return this.http.get('http://localhost:8080/expenses').pipe(map((response: any) => response._embedded.expenses));
  }
}
