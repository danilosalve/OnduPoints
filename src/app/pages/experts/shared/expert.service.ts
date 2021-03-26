import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Expert } from './expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertService extends BaseResourceService<Expert> {
  constructor(protected injector: Injector) {
    super('api/experts', injector, Expert.fromJson);
  }
}
