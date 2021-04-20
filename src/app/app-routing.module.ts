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
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then(
      m => m.CustomersModule
    )
  },
  {
    path: 'entries',
    loadChildren: () => import('./pages/invoice-entries/invoice-entries.module').then(
      m => m.InvoiceEntriesModule
    )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
