import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BypatientRoutingModule } from './bypatient-routing.module';
import { BypatientComponent } from './bypatient.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BypatientComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    BypatientRoutingModule
  ]
})
export class BypatientModule { }
