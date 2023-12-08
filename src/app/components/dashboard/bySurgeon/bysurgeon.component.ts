import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bysurgeon',
  templateUrl: './bysurgeon.component.html',
  styleUrls: ['./bysurgeon.component.css']
})
export class BysurgeonComponent implements OnInit {
@Input() selectedAssesment;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
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
      this.surgeonData=this.surgeonList[0]
    })
  }

surgeonData:any={}
selectedSurgeonId(surgeonData){
  this.surgeonData = surgeonData
}
}
