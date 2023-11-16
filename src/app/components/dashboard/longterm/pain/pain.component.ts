import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pain-long',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.css']
})
export class PainComponentLong implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  lables: any = ["Pre Op", "Long Term 6M"];
  dataChart : any = [30 , 70] 
  renderChart(){
    new Chart("painChartLong", {
      type: 'bar',
      data: {
        labels: this.lables,
        datasets: [{
          label: '# of Votes',
          data: this.dataChart,
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

}
