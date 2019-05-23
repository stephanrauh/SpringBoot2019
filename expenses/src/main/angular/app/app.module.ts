import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesService } from './expenses.service';
import { HttpClientModule } from '@angular/common/http';
import { AusgabeComponent } from './ausgabe/ausgabe.component';
import { EingabeComponent } from './eingabe/eingabe.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, ExpensesComponent, AusgabeComponent, EingabeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
