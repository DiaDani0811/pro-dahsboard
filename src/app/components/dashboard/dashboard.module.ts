import { NgModule,NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DxSelectBoxModule } from 'devextreme-angular';
@NgModule({
  declarations: [ DashboardComponent,HeaderComponent,FooterComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    ModalModule.forRoot(),
    DxSelectBoxModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DashboardModule { }
