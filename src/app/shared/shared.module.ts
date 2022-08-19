import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    UiModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    UiModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
