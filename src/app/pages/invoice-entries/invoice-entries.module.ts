import { NgModule } from '@angular/core';

import { InvoiceEntriesRoutingModule } from './invoice-entries-routing.module';
import { InvoiceEntriesFormComponent } from './invoice-entries-form/invoice-entries-form.component';
import { InvoiceEntriesListComponent } from './invoice-entries-list/invoice-entries-list.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [InvoiceEntriesFormComponent, InvoiceEntriesListComponent],
  imports: [
    SharedModule,
    InvoiceEntriesRoutingModule
  ],
  exports: [InvoiceEntriesFormComponent, InvoiceEntriesListComponent]
})
export class InvoiceEntriesModule { }
