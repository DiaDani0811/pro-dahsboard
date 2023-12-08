import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BysurgeonRoutingModule } from './bysurgeon-routing.module';
import { BysurgeonComponent } from './bysurgeon.component';
import { SurgeonsidebarComponent } from './sidebar/sidebar.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    BysurgeonComponent,
    SurgeonsidebarComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BysurgeonRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class BysurgeonModule { }
