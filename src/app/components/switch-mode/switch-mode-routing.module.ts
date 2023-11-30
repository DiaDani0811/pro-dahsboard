import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchModeComponent } from './switch-mode.component';

const routes: Routes = [
  {path:'',component:SwitchModeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchModeRoutingModule { }
