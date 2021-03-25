import { Observable } from 'rxjs';
import { Directive, OnInit } from '@angular/core';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';
import { ToastService } from './../../services/toast.service';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class BaseResourceListComponent<T extends BaseResourceModel>
  implements OnInit {
  resources: T[] = [];
  resources$: Observable<T[]> | undefined;
  page = 1;
  pageSize = 10;
  collectionSize: number;

  constructor(private resourceService: BaseResourceService<T>, protected toastService: ToastService) {}

  ngOnInit(): void {
    this.resources$ = this.resourceService.getAll();
    this.refreshResources();
  }

  deleteResource(resource: any): void {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      // tslint:disable-next-line: deprecation
      this.resourceService.delete(resource.id).subscribe(
        () => {
          this.toastService.show('Registro Excluido com sucesso', {classname: 'bg-success text-light', delay: 10000}),
          this.resources = this.resources.filter(
            (element) => element !== resource
          )
        },
        () => this.toastService.show('Erro ao tentar Excluir registro', {classname: 'bg-danger text-light', delay: 15000 })
      );
    }
  }

  async refreshResources(): Promise<any> {
    // tslint:disable-next-line: deprecation
    await this.resources$.subscribe((resource) => {
      this.collectionSize = resource.length;
      this.setResultPageAndPageSize(resource);
    });
  }

  filterResources(filter: string): void {
    // tslint:disable-next-line: deprecation
    this.resources$.subscribe((resource) => {
      if (filter){
        this.resources = resource.filter(item =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
        this.collectionSize = this.resources.length;
      } else {
        this.setResultPageAndPageSize(resource);
      }
    });
  }

  setResultPageAndPageSize(resource: T[]): void {
    this.collectionSize = resource.length;
    this.resources = resource.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
