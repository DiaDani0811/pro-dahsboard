import { Component, OnInit ,Input} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-aggregatechart',
  templateUrl: './aggregatechart.component.html',
  styleUrls: ['./aggregatechart.component.css']
})
export class AggregatechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log('aggregateChartId',this.aggregateChartId);
 
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  @Input() aggregateChartId : string = '';

  lables: any = ["Pre Op", "Recovery 3W"];
  dataChart : any = [30 , 70] 
  renderChart(){
    new Chart(this.aggregateChartId, {
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
