import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
// interface Patient {
//   bodyPart: string,
//   dos: string,
//   patName: string,
//   patSalutation: string,
//   procedureType: string,
//   surgeonName: string
// }
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userService:UserService) { }
  loader:boolean=false;
  searchText:any
  ngOnInit() {
    this.getAllPatients()
  }

  activeIndex:number=0

  cehck(data:any){
    console.log('check',data);
  }
  allPatientsList:any = [];
  getAllPatients(){
    this.loader = true
    let payload={
        "hospitalId": localStorage.getItem("hospitalId")
    }
    this.userService.getAllPatients(payload).subscribe((data)=>{
      this.allPatientsList = data
      this.loader =false
    })
  }
}
