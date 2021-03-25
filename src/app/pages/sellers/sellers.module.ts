import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { SellersRoutingModule } from './sellers-routing.module';
import { SellerFormComponent } from './seller-form/seller-form.component';
import { SellerListComponent } from './seller-list/seller-list.component';

@NgModule({
  declarations: [SellerListComponent, SellerFormComponent],
  imports: [
    SharedModule,
    SellersRoutingModule
  ]
})
export class SellersModule { }
