import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Seller } from './seller.model';

@Injectable({
  providedIn: 'root',
})
export class SellerService extends BaseResourceService<Seller> {
  constructor(protected injector: Injector) {
    super('api/sellers', injector, Seller.fromJson);
  }
}
