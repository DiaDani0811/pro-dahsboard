import { Component, OnInit ,Input} from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() chartData :any = []
  constructor() { 
    Chart.register(...registerables)
  }

 
    Hoos : string = 'HOOS1'
    Koos : string = 'KOOS1'
    Pain : string = 'PAIN1'
    @Input() selectedAssesmentData : any
  ngOnInit(): void {
    // console.log('recovery',this.selectedAssesmentData);
    console.log('chartData',this.chartData);
  }

}
