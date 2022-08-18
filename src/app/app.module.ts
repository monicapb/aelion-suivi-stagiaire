import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternTableComponent } from './intern/components/intern-table/intern-table.component';
import { InternDetailComponent } from './intern/components/intern-detail/intern-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InternTableComponent,
    InternDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
