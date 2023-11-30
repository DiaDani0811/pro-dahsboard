import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAggregateDashboardData()
  }
  
  aggredgateDashboardData:any=[];
  getAggregateDashboardData(){
    let payload = {
      comparison: {
        enable: true,
        fromRange: "",
        toRange: ""
      },
      filters: {
        cnId: "",
        hospitalId: "",
        patientId: "",
        payor: "",
        sosId: "",
        surgeonId: "",
        surgicalStage: ""
      },
      fromRange: "",
      l3Filter: "",
      l3SubFilter: "",
      mako: "",
      metricCatId: 0,
      metricId: 0,
      metricIdList: [0
      ],
      period: "",
      scoreType: "",
      toRange: ""
    }
    this.userService.getAggregateDashboardData(payload).subscribe(data=>{
      this.aggredgateDashboardData = data
    })
  }

}
