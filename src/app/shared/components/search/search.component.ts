import { debounceTime } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  formSearch: FormGroup;
  @Output() filter = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.changeSearch();
  }

  createForm(): void {
    this.formSearch = this.fb.group({
      search: ['']
    });
  }

  changeSearch(): void {
    // tslint:disable-next-line: deprecation
    this.formSearch.valueChanges.pipe(debounceTime(1000)).subscribe(
      formSearch => {
        if (formSearch.search && formSearch.search.length >= 3 || (formSearch.search.length === 0)) {
          this.filter.emit(formSearch.search);
        }
      }
    );
  }
}
