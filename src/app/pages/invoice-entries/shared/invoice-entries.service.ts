import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { InvoiceEntries } from './invoice-entries.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceEntriesService extends BaseResourceService<InvoiceEntries> {
  constructor(protected injector: Injector) {
    super('api/invoices', injector, InvoiceEntries.fromJson);
  }
}
