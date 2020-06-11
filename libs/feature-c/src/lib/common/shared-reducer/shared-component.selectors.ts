import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedComponent, sharedComponentFeatureKey } from './shared-reducer';

export const selectSharedComponentFeature = createFeatureSelector(sharedComponentFeatureKey);

export const selectSharedComponentValue = createSelector(
  selectSharedComponentFeature,
  (state: SharedComponent) => state.value,

)
