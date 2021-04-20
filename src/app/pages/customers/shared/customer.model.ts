import { PeopleModel } from 'src/app/shared/models/people.model';

export class Customer extends PeopleModel {
  expertId: string;
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Customer {
    return Object.assign(new Customer(), jsonData);
  }
}
