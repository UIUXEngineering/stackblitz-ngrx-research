import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a/feature-a.component';


@NgModule({
  declarations: [FeatureAComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule,

  ]
})
export class FeatureAModule { }
