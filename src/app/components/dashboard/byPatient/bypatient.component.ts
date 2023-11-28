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
              console.log('ctx',ctx);
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
 