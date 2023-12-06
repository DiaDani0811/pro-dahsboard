import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
interface Surgeon {

}
@Component({
  selector: 'app-surgeonSidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SurgeonsidebarComponent implements OnInit {

  constructor(private userService:UserService) { }
  ngOnInit() {
    this.getAllSurgeons();
  }

  searchText:any ='';
  activeIndex:number=0
  imgsrc:string = "../../../../assets/images/profile.jpg";
  surgeonList:any = [];
  cehck(data:any){
    console.log('check',data);
  }
  getAllSurgeons(){
    let payload={
      "hospitalId":localStorage.getItem("hospitalId")
    }
    this.userService.getAllSurgeons(payload).subscribe(data=>{
      this.surgeonList = data
      this.surgeonList.forEach(element => {
          element.fullName = element.salutation+element.firstName+element.lastName
      });
    })
  }
  filterSurgeon(){
      // this.surgeonForm.controls.
  }

}
