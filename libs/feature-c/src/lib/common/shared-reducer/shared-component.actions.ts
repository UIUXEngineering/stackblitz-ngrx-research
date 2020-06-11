import { createAction, props } from '@ngrx/store';


export const setSharedComponentValue = createAction(
  '[Shared Component] Set Value',
  props<{ value: string }>()
)


