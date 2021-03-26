import { RegionalEnum } from './../shared/expert.model';
import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Expert } from '../shared/expert.model';
import { ExpertService } from '../shared/expert.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-expert-form',
  templateUrl: './expert-form.component.html',
  styleUrls: ['./expert-form.component.css']
})
export class ExpertFormComponent extends BaseResourceFormComponent<Expert> {
  regional = [
    {value: RegionalEnum.NORTE, text: 'NORTE'},
    {value: RegionalEnum.SUL, text: 'SUL'},
    {value: RegionalEnum.SUDESTE, text: 'SUDESTE'},
  ];

  constructor(
    protected expertService: ExpertService,
    protected injector: Injector
  ) {
    super(injector, new Expert(), expertService, Expert.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      regionalId: [''],
      isActive: [null]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Tecnico';
  }

  protected editionPageTitle(): string {
    const sellerName = this.resource.name || '';
    return 'Editando Tecnico: ' + sellerName;
  }

}
