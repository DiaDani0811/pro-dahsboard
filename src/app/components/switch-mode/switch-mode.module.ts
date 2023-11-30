import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchModeRoutingModule } from './switch-mode-routing.module';
import { SwitchModeComponent } from './switch-mode.component';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
@NgModule({
  declarations: [
    SwitchModeComponent
  ],
  imports: [
    CommonModule,
    SwitchModeRoutingModule,
    DxSelectBoxModule,
  ]
})
export class SwitchModeModule { }
