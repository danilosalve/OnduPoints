import { Component, OnInit, TemplateRef } from '@angular/core';

import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  // tslint:disable-next-line: no-host-metadata-property
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent implements OnInit {

  constructor(
    public toastService: ToastService
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
