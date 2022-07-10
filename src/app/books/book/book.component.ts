import { Component, EventEmitter, Input, OnDestroy, OnInit,Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = {} as Book;  //Input when parent to child data passing 
  //@Output() bookEmitter = new EventEmitter<Book>(); ////Output when child to parent data passing 
  isInCart: boolean = false;
  constructor(private cartService: CartService) {}
  myInterval:any = null; 

  ngOnInit(): void {
    /*this.myInterval = setInterval(() =>{
      console.log('Hello')
    },1000) //for 1000 sec.
    */ 
  }

  /**
      ngOnDestroy(): void //https://ibb.co/QQHVsbZ (Working)
    {
        clearInterval(this.myInterval); //timer will stop.
        console.log({ onDestroy: 'onDestroy'});
    } 
   */
 

  addToCart()
  {  
    this.isInCart = true; 
    this.cartService.add(this.book);
  }

  removeFromCart()
  {
    this.isInCart = false; 
    this.cartService.remove(this.book); 
  }

}
