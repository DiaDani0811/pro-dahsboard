import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BypatientRoutingModule } from './bypatient-routing.module';
import { BypatientComponent } from './bypatient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    BypatientComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    BypatientRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class BypatientModule { }
