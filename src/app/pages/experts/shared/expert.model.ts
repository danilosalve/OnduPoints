import { PeopleModel } from 'src/app/shared/models/people.model';

export class Expert extends PeopleModel {
  regionalId: string;

  constructor() {
    super();
  }

  static fromJson(jsonData: any): Expert {
    return Object.assign(new Expert(), jsonData);
  }
}

export enum RegionalEnum{
  NORTE = '1',
  SUL = '2',
  SUDESTE = '3'
}
