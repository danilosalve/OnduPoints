import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class InvoiceItems extends BaseResourceModel {
  product: string;
  unitPrice: number;
  quantity: number;
  constructor() {
    super();
  }
}
