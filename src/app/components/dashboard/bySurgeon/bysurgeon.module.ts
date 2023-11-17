import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BysurgeonRoutingModule } from './bysurgeon-routing.module';
import { BysurgeonComponent } from './bysurgeon.component';
import { HoosComponentLong } from './hoos/hoos.component';
import { CaseVolume } from './CaseVolume/casevolume.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BysurgeonComponent,
    HoosComponentLong,
    CaseVolume,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BysurgeonRoutingModule
  ]
})
export class BysurgeonModule { }
