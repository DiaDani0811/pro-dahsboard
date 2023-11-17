import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BysurgeonComponent } from './bysurgeon.component';

const routes: Routes = [
  {path:'',component:BysurgeonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BysurgeonRoutingModule { }
