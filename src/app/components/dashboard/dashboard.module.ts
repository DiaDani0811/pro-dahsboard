import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DxSelectBoxModule } from 'devextreme-angular';
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { FormsModule } from '@angular/forms';
import { AggregateComponent } from './aggregate/aggregate.component';
import { RecoveryComponent } from './aggregate/recovery/recovery.component';
import { LongtermComponent } from './aggregate/longterm/longterm.component';
import { AggregatechartComponent } from './aggregate/aggregatechart/aggregatechart.component';
import { BysurgeonComponent } from './bySurgeon/bysurgeon.component';
import { BypatientComponent } from './byPatient/bypatient.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartsComponent } from './bySurgeon/charts/charts.component';
@NgModule({
  declarations: [DashboardComponent,
    HeaderComponent,
    AggregatechartComponent,
    FooterComponent,
    BysurgeonComponent,
    BypatientComponent,
    AggregateComponent,
    RecoveryComponent,
    LongtermComponent,
    ChartsComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    ModalModule.forRoot(),
    DxSelectBoxModule,
    NgxSliderModule,
    FormsModule,
    Ng2SearchPipeModule
 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DashboardModule { }
