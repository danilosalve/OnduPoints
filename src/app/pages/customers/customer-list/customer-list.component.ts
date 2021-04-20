import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Customer } from '../shared/customer.model';
import { CustomerService } from './../shared/customer.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends BaseResourceListComponent<Customer> {

  constructor(
    protected customerService: CustomerService, protected toastService: ToastService
  ) {
    super(customerService, toastService);
  }

  isActiveClass(isActive: boolean): string {
    return isActive ? 'badge-primary' : 'badge-danger';
  }

  isActiveText(isActive: boolean): string {
    return isActive ? 'Ativo' : 'Inativo';
  }

}
