import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggregateRoutingModule } from './aggregate-routing.module';
import { AggregateComponent } from './aggregate.component';
import { PainComponentLong } from './longterm/pain/pain.component';
import { KoosComponentLong } from './longterm/koos/koos.component';
import { HoosComponentLong } from './longterm/hoos/hoos.component';
import { PainComponentRec } from './recovery/pain/pain.component';
import { KoosComponentRec } from './recovery/koos/koos.component';
import { HoosComponentRec } from './recovery/hoos/hoos.component';
import { LongtermComponent } from './longterm/longterm.component';
import { RecoveryComponent } from './recovery/recovery.component';


@NgModule({
  declarations: [
    AggregateComponent,
    RecoveryComponent,
    LongtermComponent,
    HoosComponentRec,
    KoosComponentRec,
    PainComponentRec,
    HoosComponentLong,
    KoosComponentLong,
    PainComponentLong,

  ],
  imports: [
    CommonModule,
    AggregateRoutingModule
  ]
})
export class AggregateModule { }
