import { BaseResourceModel } from './base-resource.model';

export class State extends BaseResourceModel {
  value: string;
  text: string;

  static fromJson(jsonData: any): State {
    return Object.assign(new State(), jsonData);
  }
}
