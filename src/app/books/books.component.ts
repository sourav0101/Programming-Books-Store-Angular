import { Component, OnInit } from '@angular/core';

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

  isDisabled:boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }


  //function... 
  handleClick(){
     //alert("clicked");
     //this.isDisabled = true; 


  }

}
