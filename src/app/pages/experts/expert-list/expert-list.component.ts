import { ExpertService } from './../shared/expert.service';
import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Expert, RegionalEnum } from '../shared/expert.model';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent extends BaseResourceListComponent<Expert> {

  constructor(
    protected expertService: ExpertService,
    protected toastService: ToastService
  ) {
    super(expertService, toastService);
  }

  isActiveClass(isActive: boolean): string {
    return isActive ? 'badge-primary' : 'badge-danger';
  }

  isActiveText(isActive: boolean): string {
    return isActive ? 'Ativo' : 'Inativo';
  }

  getRegionalText(regionalId: string): string {
    switch (regionalId) {
      case RegionalEnum.NORTE:
        return 'Norte';
      case RegionalEnum.SUDESTE:
        return 'Sudeste';
      case RegionalEnum.SUL:
        return 'Sul';
      default:
        return 'Invalido';
    }
  }

}
