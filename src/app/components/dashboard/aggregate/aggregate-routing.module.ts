import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregateComponent } from './aggregate.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { LongtermComponent } from './longterm/longterm.component';

const routes: Routes = [
  {
    path:'',component:AggregateComponent,children:[
      {path:'',component:RecoveryComponent , outlet:'rec'},
    {path:'',component:LongtermComponent,outlet:'long'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggregateRoutingModule { }
