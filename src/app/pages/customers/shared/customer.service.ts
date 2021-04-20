import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseResourceService<Customer> {
  constructor(protected injector: Injector) {
    super('api/customers', injector, Customer.fromJson);
  }

}
