import { createAction, props } from '@ngrx/store';

export const loadCommons = createAction(
  '[Common] Load Commons'
);

export const setValue = createAction(
  '[Common] Set Value',
  props<{ value: string }>()
)


