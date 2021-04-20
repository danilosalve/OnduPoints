import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { InvoiceItems } from './invoice-items.model';

export class InvoiceEntries extends BaseResourceModel {
  document: string;
  issueDate: Date;
  amount: number;
  sellerId: string;
  sellerName: string;
  customerName: string;
  buyerName: string;
  items: InvoiceItems[];
  constructor() {
    super();
  }

  static fromJson(jsonData: any): InvoiceEntries {
    return Object.assign(new InvoiceEntries(), jsonData);
  }
}
