import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { setSharedComponentValue } from './shared-reducer/shared-component.actions';
import { selectSharedComponentValue } from './shared-reducer/shared-component.selectors';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  formInput = new FormControl('');

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectSharedComponentValue),
    ).
    subscribe((value: string) => {
      this.formInput.reset(value, { emitEvent: false });
    })

    this.formInput.valueChanges.subscribe((value) => {
      this.store.dispatch(setSharedComponentValue({
        value,
      }))
    })
  }

}
