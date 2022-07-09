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



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

//Class 

export class BooksComponent implements OnInit {
  //book array 
  book :Book[] = [
    {
      name: 'introduction to algorithms',
      author :'ronald l. rivest', 
      image: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._AC_SY1000_.jpg',
      amount: 200, 
    },
    {
      name: 'competitive programming 4', 
      author: 'felix halim',
      image: 'https://images.booksense.com/images/515/745/9781716745515.jpg',
      amount: 205,
    },
    {
      name: 'introduction to machine learning with python', 
      author: 'andreas Müller',
      image: 'https://images-na.ssl-images-amazon.com/images/I/710aLBwkr7L.jpg',
      amount: 400,
    }
    
  ];

  //making object  cart 

  cart: Book[] = [];  

  //isDisabled:boolean = false; 

  isShowing:boolean = true; 

  constructor() {  //When class is initiated automatically constructor called. 
                   //firstly call
    console.log({constructor:'constructor'}); 
  }

  ngOnInit(): void { 
    //ngOnInit need when the component is actually ready to be mounted 
    //on the HTML or the DOM  //thats why it is called after the constructor. 
    //secondly call.
    console.log({onInit:'onInit'})
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
