import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AudioBookService {

  constructor(private http: HttpClient) { }
  
  getAudioBookById(id: any){
    return this.http.get(`http://localhost:3000/book/${id}`);
  }
  createAudioBook(audio: any){
    return  this.http.post<any>("http://localhost:3000/book",audio)
  }
  
  deleteAudioBook(audio: any){
   return  this.http.delete(audio)
  }
}
