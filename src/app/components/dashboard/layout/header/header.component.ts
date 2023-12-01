import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private user : UserService) { }

  ngOnInit(): void {
    this.getClientListFromApi()
  }

  hospitalList: any={
    "GreetingMsg" : "Welcome",
    "clientName" : "Seadmin",
    "rcId" : 0
  }
  getClientListFromApi() {
    let hspId = Number(localStorage.getItem('hospitalId'))

    this.user.getClientList().subscribe({ 
      next: (value) => {
        if(localStorage.getItem('mode') != "ADMIN"){
          this.hospitalList = value.filter(data => data.rcId == hspId )[0];
        }
        else{
          this.hospitalList = this.hospitalList
        }
      }
    })
  }
  clearSession(){
    this.user.clearSession();
  }
}
