import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
  }

}
