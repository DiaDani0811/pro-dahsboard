import { Component, OnInit,SimpleChanges ,Input} from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() chartData :any = []
  @Input() periodRange :any
  constructor() { 
    Chart.register(...registerables)
  }
    Hoos : string = 'HOOS1'
    Koos : string = 'KOOS1'
    Pain : string = 'PAIN1'
    @Input() selectedAssesmentData : any
  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges) {
    this.periodRange = changes.periodRange.currentValue
    console.log('------------changes-',this.periodRange);
 }

}
