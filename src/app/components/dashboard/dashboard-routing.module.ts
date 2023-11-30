import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SwitchModeComponent } from '../switch-mode/switch-mode.component';
const routes: Routes = [
 {path:'',component:DashboardComponent,children:[
    { path:'',redirectTo:'aggregate',pathMatch:'full'},
    { path:'aggregate',loadChildren:()=>import('../dashboard/aggregate/aggregate.module').then(res=>res.AggregateModule)},
    { path:'bypatient',loadChildren:()=>import('../dashboard/byPatient/bypatient.module').then(res=>res.BypatientModule) },
    { path:'bysurgeon',loadChildren:()=>import('../dashboard/bySurgeon/bysurgeon.module').then(res=>res.BysurgeonModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
