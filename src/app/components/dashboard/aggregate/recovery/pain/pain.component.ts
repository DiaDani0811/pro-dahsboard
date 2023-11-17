import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pain-rec',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.css']
})
export class PainComponentRec implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  lables: any = ["Pre Op", "Recovery 3W"];
  dataChart: any = [60,40]
  renderChart() {
    new Chart("painChartRec", {
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

}
