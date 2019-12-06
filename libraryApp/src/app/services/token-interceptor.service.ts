<<<<<<< HEAD
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

=======
import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
>>>>>>> 484c2450f15411758e32875bc616714b1b881642

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req, next){
    let authService = this.injector.get(AuthService)
      let tokenizedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${authService.getToken()}`
          }
      })
      return next.handle(tokenizedReq)
=======
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req,next){
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    })
return next.handle(tokenizedReq)
>>>>>>> 484c2450f15411758e32875bc616714b1b881642
  }
}
