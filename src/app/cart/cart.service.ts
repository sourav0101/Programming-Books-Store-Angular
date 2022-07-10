import { ParseSourceFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  cart : Array<Book> = []; //cart is type of Book and initially it is empty. 
  constructor() {}

  add(book: Book){
    //console.log(book);
    this.cart.push(book); 
  }
  get()
  {
    return this.cart; 
  }


  remove(book:Book)
  {
    this.cart = this.cart.filter((b) => b!= book); 
  }
}

