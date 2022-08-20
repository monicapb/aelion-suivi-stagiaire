import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POERoutingModule } from './poe-routing.module';
import { POETableComponent } from './components/poe-table/poe-table.component';
import { POEDetailComponent } from './components/poe-detail/poe-detail.component';
import { POEAddComponent } from './components/poe-add/poe-add.component';


@NgModule({
  declarations: [
    POETableComponent,
    POEDetailComponent,
    POEAddComponent
  ],
  imports: [
    CommonModule,
    POERoutingModule
  ]
})
export class POEModule { }
