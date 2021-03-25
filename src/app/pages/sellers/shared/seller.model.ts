import { PeopleModel } from 'src/app/shared/models/people.model';

export class Seller extends PeopleModel {
  storeId: number;
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Seller {
    return Object.assign(new Seller(), jsonData);
  }
}
