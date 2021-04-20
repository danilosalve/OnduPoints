import { InvoiceEntriesListComponent } from './invoice-entries-list/invoice-entries-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceEntriesFormComponent } from './invoice-entries-form/invoice-entries-form.component';

const routes: Routes = [
  { path: '', component: InvoiceEntriesListComponent},
  { path: 'new', component: InvoiceEntriesFormComponent},
  { path: ':id/edit', component: InvoiceEntriesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceEntriesRoutingModule { }
