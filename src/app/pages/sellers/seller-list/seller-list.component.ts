import { ToastService } from './../../../shared/services/toast.service';
import { SellerService } from './../shared/seller.service';
import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Seller } from '../shared/seller.model';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent extends BaseResourceListComponent<Seller> {

  constructor(
    protected sellerService: SellerService, protected toastService: ToastService
  ) {
    super(sellerService, toastService);
  }

}
