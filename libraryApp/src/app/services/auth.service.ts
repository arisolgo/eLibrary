import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(
    private http: HttpClient,
   // public jwtHelper: JwtHelperService
    ) { }

    registerUser(user){
      return this.http.post<any>(this._registerUrl,user)
    }
    loginUser(user){
      return this.http.post<any>(this._loginUrl,user)
    }
    loggedIn(){
      return !!localStorage.getItem('token')
    }
    
   getToken() {
    return localStorage.getItem('token');
  }
  /*
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return this.jwtHelper.isTokenExpired(token);
  }
  */

}

