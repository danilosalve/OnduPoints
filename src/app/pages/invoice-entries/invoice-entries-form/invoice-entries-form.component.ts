import { SellerService } from './../../sellers/shared/seller.service';
import { FormArray, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { InvoiceEntries } from '../shared/invoice-entries.model';
import { InvoiceEntriesService } from '../shared/invoice-entries.service';
import { Seller } from '../../sellers/shared/seller.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-entries-form',
  templateUrl: './invoice-entries-form.component.html',
  styleUrls: ['./invoice-entries-form.component.css'],
})
export class InvoiceEntriesFormComponent
  extends BaseResourceFormComponent<InvoiceEntries>
  implements OnInit {
  items = [];
  sellers: Seller[] = [];
  product: string;
  quantity: number;
  unitPrice: number;

  constructor(
    protected invoiceService: InvoiceEntriesService,
    protected injector: Injector,
    protected sellerService: SellerService,
    protected modalService: NgbModal
  ) {
    super(
      injector,
      new InvoiceEntries(),
      invoiceService,
      InvoiceEntries.fromJson
    );
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getSellers();
    this.getItems();
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      sellerId: ['', [Validators.required]],
      sellerName: [null],
      customerName: [null],
      buyerName: [null, [Validators.required]],
      document: [null, [Validators.required, Validators.maxLength(9)]],
      issueDate: [null, [Validators.required]],
      amount: [null, [Validators.required, Validators.maxLength(11)]],
      items: [this.items]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastrar de novo Lançamento';
  }

  protected editionPageTitle(): string {
    const document = this.resource.document || '';
    return 'Editando Lançamento: ' + document;
  }

  protected addItem(): void {
    let idNext = 1;
    this.items.forEach( () => idNext++);

    const item = {
      id: idNext,
      product: this.product,
      quantity: this.quantity,
      unitPrice: this.unitPrice
    };

    this.items.push(item);
    this.modalService.dismissAll();
    this.cleanValueModal();
    this.toastService.show('Item adicionado com sucesso', {classname: 'bg-success text-light', delay: 10000});
  }

  protected removeItem(index: number): void {
    const item = this.items.filter(filter => filter.id === index);
    if (item) {
      const i = this.items.indexOf(item);
      console.log(item);
      console.log(i);
      this.items.splice(i, 1);
      this.toastService.show('Item removido com sucesso', {classname: 'bg-success text-light', delay: 10000});
    } else {
      this.toastService.show('IFalha ao remover item', {classname: 'bg-danger text-light',
      delay: 15000});
    }
  }

  setSellerName(sellerId: number): void {
    // tslint:disable-next-line: deprecation
    this.sellerService.getById(sellerId).subscribe((seller) => {
      this.resourceForm.get('sellerName').setValue(seller.name);
      this.resourceForm.get('customerName').setValue(seller.customerName);
    });
  }

  getSellers(): void {
    // tslint:disable-next-line: deprecation
    this.sellerService.getAll().subscribe(
      sellers => (this.sellers = sellers),
      () =>
        this.toastService.show('Falha ao carregar Vendedores', {
          classname: 'bg-danger text-light',
          delay: 15000,
        })
    );
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  itemIsEmpty(): boolean {
    return this.items.length > 0;
  }

  setValueChange($event, field: string): void {
    switch (field) {
      case 'product':
        this.product = $event;
        break;
      case 'unitPrice':
        this.unitPrice = $event;
        break;
      case 'quantity':
        this.quantity = $event;
        break;
    }
  }

  cleanValueModal(): void {
    this.product = '';
    this.quantity = 0;
    this.unitPrice = 0;
  }

  getItems(): void {
    if (this.currentAction !== 'new') {
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get('id')))
      )
      .subscribe(
        resource => {
          this.items = resource.items;
      },
      () => this.toastService.show('Ocorreu um erro no servidor, tenta mais tarde.', {classname: 'bg-danger text-light', delay: 15000 })
      );
        //      this.items = this.resource.items;
    }
  }
}
