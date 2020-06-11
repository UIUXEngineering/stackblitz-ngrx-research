import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FeatureCRoutingModule } from './feature-c-routing.module';
import { FeatureCComponent } from './feature-c/feature-c.component';


@NgModule({
  declarations: [FeatureCComponent],
  imports: [
    CommonModule,
    FeatureCRoutingModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class FeatureCModule { }
