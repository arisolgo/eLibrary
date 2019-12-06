import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }
  getAllBooks(){
    return this.http.get('http://localhost:3000/book');
  }
  getBookById(id: any){
    return this.http.get("http://localhost:3000/book/"+id);
  }
  createBook(book: any){
    return  this.http.post<any>("http://localhost:3000/book",book)
  }
  updateBook(book: any){
    return  this.http.put<any>("http://localhost:3000/book",book)
  }
  deleteBook(book: any){
   return  this.http.delete(book)
  }

}
