import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Seller } from '../shared/seller.model';
import { SellerService } from './../shared/seller.service';
import { ToastService } from './../../../shared/services/toast.service';
@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css'],
})
export class SellerListComponent extends BaseResourceListComponent<Seller> {
  constructor(
    protected sellerService: SellerService,
    protected toastService: ToastService
  ) {
    super(sellerService, toastService);
  }

  isActiveClass(isActive: boolean): string {
    return isActive ? 'badge-primary' : 'badge-danger';
  }

  isActiveText(isActive: boolean): string {
    return isActive ? 'Ativo' : 'Inativo';
  }

  filterResources(filter: string): void {
    // tslint:disable-next-line: deprecation
    this.resources$.subscribe((resource) => {
      if (filter){
        filter = filter.toLocaleLowerCase();
        this.resources = resource.filter(item =>
          item.name.toLocaleLowerCase().includes(filter) ||
          item.customerName.toLocaleLowerCase().includes(filter)
        );
        this.collectionSize = this.resources.length;
      } else {
        this.setResultPageAndPageSize(resource);
      }
    });
  }
}
