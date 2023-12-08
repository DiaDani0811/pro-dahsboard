import { Component, OnInit, Input,OnChanges,SimpleChanges} from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit {

 
  @Input() selectedAssesment : any=[]; 
  @Input() periodRange : any;
  constructor() { }

  ngOnInit(): void {
    
  }
 
  ngOnChanges(changes: SimpleChanges) {
    this.periodRange = changes.periodRange.currentValue
    console.log('onechange',this.periodRange);
 }


}
