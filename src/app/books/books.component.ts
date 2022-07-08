import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name:string= 'Introduction to Algorithms'; 
  author:string  ='Ronald L. Rivest'; 
  src:string = 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._AC_SY1000_.jpg';

  name2:string= 'Competitive Programming 4'; 
  author2:string  ='Felix Halim'; 
  src2:string = 'https://images.booksense.com/images/515/745/9781716745515.jpg';

  //isDisabled:boolean = false; 

  isShowing:boolean = true; 

  constructor() { }
  ngOnInit(): void {
  }

  //function... 
  handleClick(){
     //alert("clicked");
     //this.isDisabled = true; 
  }
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
  
  toggleBooks(){
    //if isShowing is true,then make it false 
    //if isShowing is false,then make it true
    this.isShowing = !this.isShowing; 
  }

}
