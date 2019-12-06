import { Component, OnInit } from "@angular/core";
import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {}

  constructor(private registerService:RegisterService, private router:Router, private route:ActivatedRoute) {}


  ngOnInit() {}

  registerUser(){
      this.registerService.register(this.user).subscribe(result=>{
        this.router.navigate(["../login/"],{relativeTo: this.route}) 
      })
  }
}
