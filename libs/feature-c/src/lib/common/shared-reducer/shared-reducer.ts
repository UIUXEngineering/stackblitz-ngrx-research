import { Action, createReducer, on } from '@ngrx/store';
import { setSharedComponentValue } from './shared-component.actions';

export const sharedComponentFeatureKey = 'sharedComponent';

export interface SharedComponent {
  value: string;
}

export const initialSharedComponentValue: SharedComponent = {
  value: 'Initial Component Value',
}

const reducer = createReducer(
  initialSharedComponentValue,
  on(setSharedComponentValue, (state, action) => {
    return {
      ...state,
      value: action.value,
    }
  })
)

export function sharedComponentReducer(state: SharedComponent | undefined, action: Action) {
  return reducer(state, action);
}
