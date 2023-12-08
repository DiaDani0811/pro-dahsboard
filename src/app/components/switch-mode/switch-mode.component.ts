
import { Component,  OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-switch-mode',
  templateUrl: './switch-mode.component.html',
  styleUrls: ['./switch-mode.component.css']
})


export class SwitchModeComponent implements OnInit {
  mode= 'A';
  constructor(private user : UserService,private router : Router) { }
  disableButton : boolean = true;
  ngOnInit(): void {
      this.getClientListFromApi();
  }
  hospitalList : any = []
  getClientListFromApi(){
    this.user.getClientList().subscribe(value=>{
      this.hospitalList = value
    }
    )
  }
  hospitalId:any;
  hspchangeevent(e:any){
    this.hospitalId =  e.value 
    if(this.hospitalId){
      this.disableButton = false
    }
  }
  launch(modeType){
    window.localStorage.setItem('mode', modeType);
    modeType == "PRESENTATION" ? window.localStorage.setItem("hospitalId",this.hospitalId) :  window.localStorage.setItem("hospitalId","0");   
    this.router.navigateByUrl('/dashboard');
  }
  backToLogin(){
      this.user.clearSession();
      this.router.navigateByUrl('/login')
  }

}
