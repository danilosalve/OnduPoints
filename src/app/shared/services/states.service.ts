import { State } from './../models/state.model';
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class StatesService extends BaseResourceService<State> {
  constructor(protected injector: Injector) {
    super('api/states', injector, State.fromJson);
  }
}
