import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Customer } from '../shared/customer.model';
import { CustomerService } from './../shared/customer.service';
import { ExpertService } from './../../experts/shared/expert.service';
import { StatesService } from 'src/app/shared/services/states.service';
import { State } from 'src/app/shared/models/state.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent extends BaseResourceFormComponent<Customer> implements OnInit  {
  states: State[] = [];
  experts = [];
  documentMask = '00.000.000/0000-00 || 000.000.000-00';

  constructor(
    protected customerService: CustomerService,
    protected injector: Injector,
    protected stateService: StatesService,
    protected expertService: ExpertService
  ) {
    super(injector, new Customer(), customerService, Customer.fromJson);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getStates();
    this.getExperts();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      document: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      state: [''],
      city: [null],
      neighborhood: [null],
      isActive: [null],
      expertId: ['', [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de novo Cliente';
  }

  protected editionPageTitle(): string {
    const customerName = this.resource.name || '';
    return 'Editando Cliente: ' + customerName;
  }

  protected getStates(): void {
    // tslint:disable-next-line: deprecation
    this.stateService.getAll().subscribe({
      next: states => this.states = states,
      error: error => console.error(error)
    });
  }

  protected getExperts(): void {
    // tslint:disable-next-line: deprecation
    this.expertService.getAll().subscribe({
      next: experts => this.experts = experts,
      error: error => console.error(error)
    });
  }

}
