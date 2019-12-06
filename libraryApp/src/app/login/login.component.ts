import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:any = {}

  constructor(private authService:AuthService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
      this.authService.loginUser(this.user).subscribe(result =>{
        this.router.navigate(["../library/"],{relativeTo: this.route}) 
      })
  }

  register(){
      this.router.navigate(["../register/"],{relativeTo: this.route}) 
  }

}
