import { BaseResourceModel } from './base-resource.model';

export abstract class PeopleModel extends BaseResourceModel {
  id?: number;
  name?: string;
  state?: string;
  city?: string;
  address?: string;
  zipCode?: string;
  neighborhood?: string;
  complement?: string;
  type?: number;
  document?: number;
  email?: string;
  phone?: number;
  isActive: boolean;
}

export enum TypeOfPerson {
  SELLER = 1,
  REPRESENTATIVES = 2,
  TECHNICIAN = 3,
  COORDINATOR = 4
}

