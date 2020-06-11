import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { sharedComponentFeatureKey, sharedComponentReducer } from './shared-reducer/shared-reducer';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    StoreModule.forFeature(sharedComponentFeatureKey, sharedComponentReducer),
  ]
})
export class SharedComponentModule { }
