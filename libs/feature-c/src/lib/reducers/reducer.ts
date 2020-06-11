import { Action, createReducer, on } from '@ngrx/store';
import { setValue } from './common.actions';

export const commonFeatureKey = 'common';

export interface Common {
  value: string;
}

export const initialCommonValue: Common = {
  value: 'Initial Value',
}

const reducer = createReducer(
  initialCommonValue,
  on(setValue, (state, action) => {
    return {
      ...state,
      value: action.value,
    }
  })
)

export function commonReducer(state: Common | undefined, action: Action) {
  return reducer(state, action);
}
