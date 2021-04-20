import { Component } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { InvoiceEntries } from '../shared/invoice-entries.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { InvoiceEntriesService } from '../shared/invoice-entries.service';

@Component({
  selector: 'app-invoice-entries-list',
  templateUrl: './invoice-entries-list.component.html',
  styleUrls: ['./invoice-entries-list.component.css']
})
export class InvoiceEntriesListComponent extends BaseResourceListComponent<InvoiceEntries> {

  constructor(
    protected invoiceEntriesService: InvoiceEntriesService,
    protected toastService: ToastService
  ) {
    super(invoiceEntriesService, toastService);
  }

  isActiveClass(isActive: boolean): string {
    return isActive ? 'badge-primary' : 'badge-danger';
  }

  isActiveText(isActive: boolean): string {
    return isActive ? 'Ativo' : 'Inativo';
  }
}
