import { Component, EventEmitter, Input, OnDestroy, OnInit,Output } from '@angular/core';
import { Book } from '../types/Book'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = {} as Book;  //Input when parent to child data passing 
  @Output() bookEmitter = new EventEmitter<Book>(); ////Output when child to parent data passing 

  constructor() { }
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
 

  addToCart(){
    //console.log(this.book)
    this.bookEmitter.emit(this.book);
  }

}
