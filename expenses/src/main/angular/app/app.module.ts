import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesService } from './expenses.service';
import { HttpClientModule } from '@angular/common/http';
import { AusgabeComponent } from './ausgabe/ausgabe.component';
import { EingabeComponent } from './eingabe/eingabe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
  MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormstyleComponent } from './formstyle/formstyle.component';
import { TablestyleComponent } from './tablestyle/tablestyle.component';


@NgModule({
  declarations: [AppComponent, ExpensesComponent, AusgabeComponent, EingabeComponent,
    NavigationComponent, FormstyleComponent, TablestyleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatSortModule],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
