import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }
 
  register(user:any){
    return this.http.post<any>("http://localhost:3000/register",user)
  }
}
