import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email,Validators.pattern('admin@solvedge.com')]),
      password: new FormControl('',[Validators.required,Validators.pattern('Demo@123')])
    })
  }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl("/dashboard")
  }
  submitLogin(){
      let payload = {
        "email" : this.loginForm.value.email,
        "password" : atob(this.loginForm.value.password)
      }
      
  }
}
