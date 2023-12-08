import { Component, OnInit ,Input,AfterViewInit,SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-aggregatechart',
  templateUrl: './aggregatechart.component.html',
  styleUrls: ['./aggregatechart.component.css']
})
export class AggregatechartComponent implements OnInit,AfterViewInit {
  constructor(private userService:UserService) { }
  @Input() aggregateChartId : string = '';
  @Input() metricId : number;
  @Input()periodRangeData : any;
  aggredgateDashboardData:any=[];
  lables: any = [];
  dataChart : any = [] ;
  ngOnInit(): void {
    this.periodRangeData = [{
      "fromRange":"Q2-18",
      "toRange": "Q3-22",
      "period":"Q"
    }]
    this.getAggregateDashboardData();
  }
  ngAfterViewInit() {
   
  }
  ngOnChanges(changes: any) {
    this.periodRangeData = changes.periodRangeData.currentValue

    this.getAggregateDashboardData()
 }



  getAggregateDashboardData(){
    let payload = {
        "filters": {
         "cnId": "",
         "hospitalId": localStorage.getItem('hospitalId') ? localStorage.getItem('hospitalId') : 0 ,
         "payor": "",
         "sosId": "",
         "surgeonId": "",
         "surgicalStage": ""
        },
        "l3Filter": "surgeon",
        "l3SubFilter": "all",
        "comparison": {
         "enable": false,
         "fromRange": "",
         "toRange": ""
        },
        "fromRange": this.periodRangeData[0].fromRange,
        "toRange": this.periodRangeData[0].toRange ,
        "mako": "'yes','no'",
        "period":this.periodRangeData[0].period ,
        "scoreType": "altscore",
        "metricId": 0,
        "metricIdList": [this.metricId],
        "metricCatId": 4,
        "button": localStorage.getItem('mode')       
    }
    this.userService.getAggregateDashboardData(payload).subscribe(data=>{
      this.aggredgateDashboardData = data
      if(this.aggredgateDashboardData.survey.length>0)
      {
        this.lables = this.aggredgateDashboardData.survey[0].chartData.map( (item) => item.label);
        this.dataChart = this.aggredgateDashboardData.survey[0].chartData.map( (item) => item.value);
        this.renderChart();
      }
      
    })
  }


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
