import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bysurgeon',
  templateUrl: './bysurgeon.component.html',
  styleUrls: ['./bysurgeon.component.css']
})
export class BysurgeonComponent implements OnInit {

  constructor(private userService : UserService) { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.getAllSurgeons();
    this.renderCaseVolumeChart();
     this.renderHoosChart();

  }
  lables: any = ["Pre Op", "Recovery 3W"];
  dataChart: any = [60,40]
  renderCaseVolumeChart() {
    new Chart("casevolume", {
      type: 'bar',
      data: {
        labels: this.lables,
        datasets: [{
          data: this.dataChart,
          label: '# of Votes',
          backgroundColor: ["rgb(129,138,135)", "rgb(255,181,0)"],
          borderWidth: 1,
          barThickness: 50,
          categoryPercentage : 0,
          barPercentage : 0
        }]
      },
      options: {
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            title : {display : true,text : 'AVG Score',font : { size : 15}}
          }
        }
      }
    });

  }
  
  hooslables: any = ["Pre Op", "Long Term 6M"];
  dataHoosChart : any = [30 , 70] 
  renderHoosChart(){
    new Chart("hoosSurgen", {
      type: 'bar',
      data: {
        labels: this.hooslables,
        datasets: [{
          label: '# of Votes',
          data: this.dataHoosChart,
          backgroundColor : ["rgb(129,138,135)","rgb(255,181,0)"],
          borderWidth: 1,
          barThickness : 50
        }]
      },
      options: {
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            title : {display : true,text : 'AVG Score',font : { size : 15}}
          }
        }
      }
    });
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
