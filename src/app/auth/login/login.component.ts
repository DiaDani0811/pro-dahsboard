import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  constructor(private router:Router,
              private userService : UserService) {
    this.loginForm = new FormGroup({
      email : new FormControl('admin@solvedge.com',[Validators.required,Validators.email,Validators.pattern('admin@solvedge.com')]),
      password: new FormControl('Demo@123',[Validators.required,Validators.pattern('Demo@123')])
    })
  }

  ngOnInit() {
  }
  login(){
    let payload = {
      "email" : this.loginForm.value.email,
      "password" : this.loginForm.value.password
    }
    console.log('paylaod',payload);
    this.userService.attemptAuth(payload).subscribe(data => {
      if (data) {
        this.router.navigate(["/dashboard"])
      }
    //     this.toast.success('Login Successfully', '', {
    //       progressBar: true
    //     })

    //     this.router.navigate(['/dash'])

    //   } else {
    //     this.toast.error('Invalid Login Credentials', '', {
    //       progressBar: true
    //     })
    //   }
    // },
    // err => {
    //   this.toast.error('Invalid Login Credentials', '', {
    //     progressBar: true
    //   })
    // }
    })
  }
  
}
