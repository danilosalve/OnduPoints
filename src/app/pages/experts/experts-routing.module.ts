import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertListComponent } from './expert-list/expert-list.component';
import { ExpertFormComponent } from './expert-form/expert-form.component';

const routes: Routes = [
  { path: '', component: ExpertListComponent},
  { path: 'new', component: ExpertFormComponent},
  { path: ':id/edit', component: ExpertFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertsRoutingModule { }
