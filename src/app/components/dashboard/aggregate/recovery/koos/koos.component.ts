import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-koos-rec',
  templateUrl: './koos.component.html',
  styleUrls: ['./koos.component.css']
})
export class KoosComponentRec implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  lables: any = ["Pre Op", "Recovery 3W"];
  dataChart : any = [82 , 18] 
  config : any = {
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
  }
  renderChart(){
    new Chart("koosChartRec", this.config);
  }

}
