import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bysurgeon',
  templateUrl: './bysurgeon.component.html',
  styleUrls: ['./bysurgeon.component.css']
})
export class BysurgeonComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
  }

}
