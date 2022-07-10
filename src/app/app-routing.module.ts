import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

//Routing path setting...
const routes: Routes = [
  { path:'', component:BooksComponent },
  { path:'cart', component:CartComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
 