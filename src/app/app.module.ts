import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
//import { SouravDasComponent } from './sourav-das/sourav-das.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule], // FormsModule import korsi.
  bootstrap: [AppComponent],
})
export class AppModule {}
