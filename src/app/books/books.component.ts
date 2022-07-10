/** 
 * Lifecycle Hooks:
----------------
Whenever you have a component and when you create the new class of the 
component,then after that it load the template,it load the child component.. 
so at every step you can have Hook...

so means that you can do every step something.
so its a life cycle of a Component... 

*the life cycle continues with change detection,as angular check to see data-bound 
properties change,update both the view and component instance as needed. 

*The life cycle ends when Angular destroys the Component instance and removes its 
randered template from the DOM. 
 * 
 * 
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

//Class 

export class BooksComponent implements OnInit {
  //books array 
  books :Book[] = []; //Holding all books Data.
  constructor(private booksService: BooksService) {} //this is called Depandancy Injection.
  //bookService is a private variable,which is gonna have BookService class instance



  //making object  cart 
  cart: Book[] = [];  
  isShowing:boolean = true; 
  ngOnInit(): void 
  { 
    this.books = this.booksService.getBooks(); 
  }

 
  addToCart(book:Book){ 
    console.log(book); 
    //why book,cause we have passed book obj/info 
    //
  }

  //function... 
  //handleClick(){
     //alert("clicked");
     //this.isDisabled = true; 
  //}
  //myName:string = '';
  
  /**
   * //So without that below function we can perform Two way binding... 
   *  
   * handleInput(event: any){
    //alert('hi'); 
    //console.log(event.target.value);
    this.myName = event.target.value; 
  }
   */
  
  //toggleBooks(){
    //if isShowing is true,then make it false 
    //if isShowing is false,then make it true
    //this.isShowing = !this.isShowing; 
  //}

}
