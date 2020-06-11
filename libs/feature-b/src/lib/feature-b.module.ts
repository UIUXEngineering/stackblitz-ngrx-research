import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b/feature-b.component';


@NgModule({
  declarations: [FeatureBComponent],
  imports: [
    CommonModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
