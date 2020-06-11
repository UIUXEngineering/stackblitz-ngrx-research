import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Common, commonFeatureKey } from './reducer';

export const selectCommonFeature = createFeatureSelector(commonFeatureKey);

export const selectValue = createSelector(
  selectCommonFeature,
  (state: Common) => state.value,

)
