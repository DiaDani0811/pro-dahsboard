import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LongtermComponent } from './longterm/longterm.component';
import { RecoveryComponent } from './recovery/recovery.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',component:RecoveryComponent , outlet:'rec'},
    {path:'',component:LongtermComponent,outlet:'long'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
