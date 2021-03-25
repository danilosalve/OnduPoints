import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerFormComponent } from './seller-form/seller-form.component';

const routes: Routes = [
  { path: '', component: SellerListComponent},
  { path: 'new', component: SellerFormComponent},
  { path: ':id/edit', component: SellerFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
