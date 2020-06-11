import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a/feature-a.component';


@NgModule({
  declarations: [FeatureAComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class FeatureAModule { }
