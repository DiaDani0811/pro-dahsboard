import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bypatient',
  templateUrl: './bypatient.component.html',
  styleUrls: ['./bypatient.component.css']
})
export class BypatientComponent implements OnInit {


  ngOnInit(): void {
    this.renderChart();
    this.getAllPatients()
  }
  
  constructor(private userService:UserService) { }
  loader:boolean=false;
  searchText:any
  img_src:string = "../../../../assets/images/profile.jpg";
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
    if(data){
      this.allPatientsList = data
      this.allPatientsList.forEach(element => {
        element.fullName = element.patSalutation+element.patName
      });
      this.loader =false
    }
    })
  }

  lables: any = ["Pre Op", "Recovery", "Long Term Follow-up"];
  dataChart : any = [25 , 40, 60, 80, 100];
 
  renderChart(){
    const data = {
      datasets: [{
        label: 'red Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)'
        ],
        borderWidth: 1
      },
      {
        label: 'black Sales',
        data: [28, 12, 16, 19, 20, 30, 52],
        backgroundColor: [
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };
    new Chart("byPatientLineChart", {
      type: 'line',
      data,
      options: {
        scales: {
          x:{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            afterFit : ((ctx: any)=>{
            })
          },
          x2 : {
            labels: ['', 'hii', 'hello'],
            display : true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  tableData = [{
    "date" : "08/10/2022",
    "survey" : "HOOS",
    "visit" : "Pre Op",
    "Score" : 20
  },
  {
    "date" : "08/10/2022",
    "survey" : "HOOS",
    "visit" : "3 Weeks",
    "Score" : 30
  },
  {
    "date" : "08/10/2022",
    "survey" : "HOOS",
    "visit" : "6 Weeks",
    "Score" : 40
  },
  {
    "date" : "08/10/2022",
    "survey" : "HOOS",
    "visit" : "6 Month",
    "Score" : 50
  },
]



}
 