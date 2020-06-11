import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectValue, setValue } from '@stackblitz-ngrx-research/feature-c';

@Component({
  selector: 'stackblitz-ngrx-research-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss']
})
export class FeatureBComponent implements OnInit {

  formInput = new FormControl('');

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectValue),
    ).
    subscribe((value: string) => {
      this.formInput.reset(value, { emitEvent: false });
    })

    this.formInput.valueChanges.subscribe((value) => {
      this.store.dispatch(setValue({
        value,
      }))
    })
  }

}
