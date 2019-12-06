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
  getBook(id: string){
    return this.http.get(`http://localhost:3000/book/${id}`);
  }
}
