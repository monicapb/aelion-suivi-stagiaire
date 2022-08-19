import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternDetailComponent } from './components/intern-detail/intern-detail.component';
import { InternTableComponent } from './components/intern-table/intern-table.component';


@NgModule({
  declarations: [
    InternDetailComponent,
    InternTableComponent
  ],
  imports: [
    CommonModule,
    InternRoutingModule
  ]
})
export class InternModule { }
