import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bypatient',
  templateUrl: './bypatient.component.html',
  styleUrls: ['./bypatient.component.css']
})
export class BypatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  lables: any = ["Pre Op", "Recovery", "Long Term Follow-up"];
  dataChart : any = [25 , 40, 60, 80, 100] 
  renderChart(){
    new Chart("byPatientLineChart", {
      type: 'line',
      data: {
        labels: this.lables,
        datasets: [{
          data: this.dataChart,
          backgroundColor : ["rgb(129,138,135)","rgb(255,181,0)"],          
          tension : 0.5
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
 