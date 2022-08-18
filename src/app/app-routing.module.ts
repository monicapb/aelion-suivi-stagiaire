import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternDetailComponent } from './intern/components/intern-detail/intern-detail.component';
import { InternTableComponent } from './intern/components/intern-table/intern-table.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'interns',
      pathMatch: 'full'
    },
    {
      path: 'interns',
      component: InternTableComponent
    },
    {
      path: 'intern/:id',
      component: InternDetailComponent
    },
    {
      path: '**',
      redirectTo: 'interns',
      pathMatch: 'full'
    }
  ];
}
