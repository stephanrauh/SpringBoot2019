import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesService } from './expenses.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ExpensesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
