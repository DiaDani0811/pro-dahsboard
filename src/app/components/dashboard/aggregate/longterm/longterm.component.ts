import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-longterm',
  templateUrl: './longterm.component.html',
  styleUrls: ['./longterm.component.css']
})
export class LongtermComponent implements OnInit {
  @Input() chartData : any
  constructor() { }
  @Input() selectedAssesmentData : any
  @Input() periodRange :any
  ngOnInit(): void {
  }
}
