import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAggregateDashboardData();
    //console.log('aggregate page ',this.selectedAssesment);
  }
  
  aggredgateDashboardData:any=[];
  @Input() selectedAssesment : any 

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
        "fromRange": "Q2-11",
        "toRange": "Q3-18",
        "mako": "'yes','no'",
        "period": "Q",
        "scoreType": "altscore",
        "metricId": 0,
        "metricIdList": [
         12
        ],
        "metricCatId": 4,
        "button": localStorage.getItem('mode')       
    }
    this.userService.getAggregateDashboardData(payload).subscribe(data=>{
      this.aggredgateDashboardData = data
    })
  }

}
