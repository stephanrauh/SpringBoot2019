import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesService } from './expenses.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, ExpensesComponent, AusgabeComponent, EingabeComponent,
    NavigationComponent, FormstyleComponent, TablestyleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
    LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule, MatTableModule,
    MatPaginatorModule, MatSortModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService){
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');
    translate.getBrowserLang();

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('de');
    translate.use(translate.getBrowserLang());

  }
}
