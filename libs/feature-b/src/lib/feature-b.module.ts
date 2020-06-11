import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import {
  commonFeatureKey,
  commonReducer,
  SharedComponentModule
} from '@stackblitz-ngrx-research/feature-c';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b/feature-b.component';


@NgModule({
  declarations: [FeatureBComponent],
  imports: [
    CommonModule,
    FeatureBRoutingModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    StoreModule.forFeature(commonFeatureKey, commonReducer),

    SharedComponentModule,
  ]
})
export class FeatureBModule {
  constructor() {
    console.log("Feature B Module Loaded");
  }
}
