import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

interface Book {
  name:string; 
  author:string; 
  image:string; 
  amount:number; 
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

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

  

  //isDisabled:boolean = false; 

  isShowing:boolean = true; 

  constructor() { }





  ngOnInit(): void {
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
