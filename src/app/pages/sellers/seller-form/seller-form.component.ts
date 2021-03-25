import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Seller } from '../shared/seller.model';
import { SellerService } from './../shared/seller.service';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css'],
})
export class SellerFormComponent extends BaseResourceFormComponent<Seller> {
  states = [
    {value: 'AC', text: 'ACRE'},
    {value: 'AL', text: 'ALAGOAS'},
    {value: 'AP', text: 'AMAPÁ'},
    {value: 'AM', text: 'AMAZONAS'},
    {value: 'BA', text: 'BAHIA'},
    {value: 'CE', text: 'CEARÁ'},
    {value: 'DF', text: 'DISTRITO FEDERAL'},
    {value: 'ES', text: 'ESPIRITO SANTOS'},
    {value: 'GO', text: 'GOIÁS'},
    {value: 'MA', text: 'MARANHÃO'},
    {value: 'MT', text: 'MATO GROSSO'},
    {value: 'MS', text: 'MATO GROSSO DO SUL'},
    {value: 'MG', text: 'MINAS GERAIS'},
    {value: 'PA', text: 'PARÁ'},
    {value: 'PB', text: 'PARAÍBA'},
    {value: 'PR', text: 'PARANÁ'},
    {value: 'PE', text: 'PERNANBUCO'},
    {value: 'PI', text: 'PIAUÍ'},
    {value: 'RJ', text: 'RIO DE JANEIRO'},
    {value: 'RN', text: 'RIO GRANDE DO NORTE'},
    {value: 'RS', text: 'RIO GRANDE DO SUL'},
    {value: 'RO', text: 'RONDÔNIA'},
    {value: 'RR', text: 'RORAIMA'},
    {value: 'SC', text: 'SANTA CATARINA'},
    {value: 'SP', text: 'SÃO PAULO'},
    {value: 'SE', text: 'SERGIPE'},
    {value: 'TO', text: 'TOCANTINS'},
  ];
  constructor(
    protected sellerService: SellerService,
    protected injector: Injector
  ) {
    super(injector, new Seller(), sellerService, Seller.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      document: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      zipCode: [null, [Validators.minLength(8), Validators.maxLength(8)]],
      address: [null],
      neighborhood: [null],
      state: [''],
      city: [null],
      complement: [null]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Vendedor';
  }

  protected editionPageTitle(): string {
    const sellerName = this.resource.name || '';
    return 'Editando Vendedor: ' + sellerName;
  }
}
