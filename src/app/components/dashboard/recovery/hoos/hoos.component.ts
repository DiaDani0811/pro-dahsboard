import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-hoos-rec',
  templateUrl: './hoos.component.html',
  styleUrls: ['./hoos.component.css']
})
export class HoosComponentRec implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  lables: any = ["Pre Op", "Recovery 3W"];
  dataChart : any = [30 , 70] 
  renderChart(){
    new Chart("hoosChartRec", {
      type: 'bar',
      data: {
        labels: this.lables,
        datasets: [{
          data: this.dataChart,
          backgroundColor : ["rgb(129,138,135)","rgb(255,181,0)"],
          categoryPercentage : 0.5,
          barPercentage : 0.5

          
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

}
