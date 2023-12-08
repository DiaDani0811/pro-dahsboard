import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
@Input() selectedAssesment:any={}
@Input() surgeonData:any={}

  constructor(private userService:UserService) {
    Chart.register(...registerables)   
  } 

  ngOnInit(): void {
    // this.renderHoosChart()
 
    // this.renderCaseVolumeChart()
  }

  ngOnChanges(changes:SimpleChange)
  {
    this.filterMetricIds()
    setTimeout(()=>{this.configurePayload()},100)
  }
  metricIds:any=[]
  filterMetricIds()
  {
    this.metricIds=this.selectedAssesment.map(data=>data.metricId)
  }
  configurePayload()
  {
    var requestJson={
      "filters": {
        "cnId": "",
        "hospitalId": localStorage.getItem('hospitalId') ? localStorage.getItem('hospitalId') : 0 ,
        "payor": "",
        "sosId": "",
        "surgeonId": String(this.surgeonData.userAccountId),
        "surgicalStage": ""
      },
      "l3Filter": "surgeon",
      "l3SubFilter": "all",
      "comparison": {
        "enable": false,
        "fromRange": "",
        "toRange": ""
      },
      "fromRange": "Q2-18",
      "toRange": "Q3-21",
      "mako": "'yes','no'",
      "period": "Q",
      "scoreType": "altscore",
      "metricId": 12,
      "metricIdList": this.metricIds,
      "metricCatId": 4,
      "button": "ADMIN"
    }
    this.getchartDetails(requestJson)
  }
  surgeonChartDetails:any=[]
  getchartDetails(requestJson)
  {
   this.userService.getSurgeonDashboardData(requestJson).subscribe(chartData=>{
       if(chartData.status='success')
       {
        this.surgeonChartDetails = chartData.survey
        if(this.surgeonChartDetails.length>0)
        {
          this.surgeonChartDetails.forEach((survey,i)=>{
            var lables = survey.chartData.map( (item) => item.label);
            var values = survey.chartData.map( (item) => item.value);
            survey.chartName=this.makeString()
            setTimeout(()=>{this.renderChart(lables,values,survey.chartName)},100)
          })
        }
       }
   })
  } 
  renderChart(lables,values,chartName) {
    new Chart(chartName, {
      type: 'bar',
      data: {
        labels:lables,
        datasets: [
          {
            data: values,
            label: '# of Votes',
            backgroundColor: ['rgb(129,138,135)', 'rgb(255,181,0)'],
            borderWidth: 1,
            barThickness: 50,
            categoryPercentage: 0,
            barPercentage: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            title: { display: true, text: 'AVG Score', font: { size: 15 } },
          },
        },
      },
    });
  }
 

  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    }
    return outString;
  }
}
