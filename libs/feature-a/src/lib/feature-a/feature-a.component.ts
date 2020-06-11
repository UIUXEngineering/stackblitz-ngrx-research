import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectValue } from '@stackblitz-ngrx-research/feature-c';

@Component({
  selector: 'stackblitz-ngrx-research-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {

  formInput = new FormControl('');

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectValue),
    ).
    subscribe((value: string) => {
      this.formInput.reset(value, { emitEvent: false });
    })
  }

}
