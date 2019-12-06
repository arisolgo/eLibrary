import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user:Object){
      return this.http.post('http://localhost:3000/login', user);
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
      return localStorage.getItem('token');
  }
 
  

}

