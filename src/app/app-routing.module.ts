import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sellers',
    loadChildren: () => import('./pages/sellers/sellers.module').then(
      m => m.SellersModule
    )
  },
  {
    path: 'experts',
    loadChildren: () => import('./pages/experts/experts.module').then(
      m => m.ExpertsModule
    )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
