import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
//import { SouravDasComponent } from './sourav-das/sourav-das.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    //SouravDasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // FormsModule import korsi.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
