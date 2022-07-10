import { Injectable } from '@angular/core';

@Injectable()
//Injectable means we can use the service from the service container. 

export class BooksService {

  constructor() { }
  getBooks() 
  {
    return [  
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
  } 
}
