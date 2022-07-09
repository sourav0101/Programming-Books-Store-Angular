import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
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

  ngOnInit(): void {
  }


  addToCart(){
    //console.log(this.book)
    this.bookEmitter.emit(this.book);
  }

}
