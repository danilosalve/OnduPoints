import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ExpertsRoutingModule } from './experts-routing.module';
import { ExpertListComponent } from './expert-list/expert-list.component';
import { ExpertFormComponent } from './expert-form/expert-form.component';

@NgModule({
  declarations: [ExpertFormComponent, ExpertListComponent],
  imports: [SharedModule, ExpertsRoutingModule],
  exports: [ExpertFormComponent, ExpertListComponent],
})
export class ExpertsModule {}
