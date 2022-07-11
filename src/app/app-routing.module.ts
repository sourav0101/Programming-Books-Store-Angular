import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

//Routing path setting...
const routes: Routes = [
  { path:'', component:BooksComponent },
  { path:'cart', component:CartComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
 