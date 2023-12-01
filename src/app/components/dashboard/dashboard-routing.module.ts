import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SwitchModeComponent } from '../switch-mode/switch-mode.component';
import { AggregateComponent } from './aggregate/aggregate.component';
const routes: Routes = [
 {path:'',component:DashboardComponent, pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
