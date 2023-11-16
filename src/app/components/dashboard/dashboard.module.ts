import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryComponent } from './recovery/recovery.component';
import { LongtermComponent } from './longterm/longterm.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HoosComponentRec } from './recovery/hoos/hoos.component';
import { KoosComponentRec } from './recovery/koos/koos.component';
import { PainComponentRec } from './recovery/pain/pain.component';
import { HoosComponentLong } from './longterm/hoos/hoos.component';
import { KoosComponentLong } from './longterm/koos/koos.component';
import { PainComponentLong } from './longterm/pain/pain.component';


@NgModule({
  declarations: [
    RecoveryComponent,
    LongtermComponent,
    HoosComponentRec,
    KoosComponentRec,
    PainComponentRec,
    HoosComponentLong,
    KoosComponentLong,
    PainComponentLong
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
