import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  ]
})
export class FeatureBModule { }
