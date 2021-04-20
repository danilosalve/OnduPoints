import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Customer } from '../../customers/shared/customer.model';
import { CustomerService } from './../../customers/shared/customer.service';
import { Seller } from '../shared/seller.model';
import { SellerService } from './../shared/seller.service';
import { State } from './../../../shared/models/state.model';
import { StatesService } from './../../../shared/services/states.service';
@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css'],
})
export class SellerFormComponent
  extends BaseResourceFormComponent<Seller>
  implements OnInit {
  states: State[] = [];
  offices = [
    { value: 1, text: 'Gerente' },
    { value: 2, text: 'Vendedor' },
  ];
  customers: Customer[] = [];
  phoneMask = '(00) 0000-0000 || (00) 0 0000-0000';

  constructor(
    protected sellerService: SellerService,
    protected injector: Injector,
    protected stateService: StatesService,
    protected customerService: CustomerService
  ) {
    super(injector, new Seller(), sellerService, Seller.fromJson);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getStates();
    this.getCustomers();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      document: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
        ],
      ],
      zipCode: [null, [Validators.minLength(8), Validators.maxLength(8)]],
      address: [null],
      neighborhood: [null],
      state: [''],
      city: [null],
      complement: [null],
      office: ['', [Validators.required]],
      isActive: [null],
      birthDate: [null, [Validators.required]],
      customerId: ['', [Validators.required]],
      customerName: [null],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Vendedor';
  }

  protected editionPageTitle(): string {
    const sellerName = this.resource.name || '';
    return 'Editando Vendedor: ' + sellerName;
  }

  protected getStates(): void {
    // tslint:disable-next-line: deprecation
    this.stateService.getAll().subscribe({
      next: (states) => (this.states = states),
      error: (error) => console.error(error),
    });
  }

  protected getCustomers(): void {
    this.customerService.getAll().subscribe({
      next: (customers) => (this.customers = customers),
      error: (error) => console.error(error),
    });
  }

  changeCustomer($event): void {
    this.customerService
      .getById($event)
      // tslint:disable-next-line: deprecation
      .subscribe(customer => ({
        next: this.resourceForm.get('customerName').setValue(customer.name)
      }));
  }
}
