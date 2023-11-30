import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userService:UserService) { }
  ngOnInit() {
    this.getAllSurgeons();
  }

  searchText:any ='';
  activeIndex:number=0
   public ProfileJson = [{ 
    "title":"Mr.",
    "name" : "Georghe McClellan",
    "dos" : "08-21-2022",
    "serviceLine" : "TKA",
    "img" : "../../../../assets/images/profile.jpg"
   },
   { 
    "title":"Mr.",
    "name" : "Rivera Juliette",
    "dos" : "05-26-2023",
    "serviceLine" : "PKA",
    "img" : "../../../../assets/images/profile.jpg"
   },
   { 
    "title":"Mr.",
    "name" : "Preston Karson",
    "dos" : "06-22-2022",
    "serviceLine" : "THA",
    "img" : "../../../../assets/images/profile.jpg"
   },
   { 
    "title":"Mr.",
    "name" : "Emma Reagan",
    "dos" : "06-16-2022",
    "serviceLine" : "THA",
    "img" : "../../../../assets/images/profile.jpg"
   },
   { 
    "title":"Mr.",
    "name" : "Mcclure Cecelia",
    "dos" : "08-21-2022",
    "serviceLine" : "TKA",
    "img" : "../../../../assets/images/profile.jpg"
   },
  ]
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
    })
  }
  filterSurgeon(){
      // this.surgeonForm.controls.
  }

}
