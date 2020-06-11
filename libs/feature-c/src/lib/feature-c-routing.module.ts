import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureCComponent } from './feature-c/feature-c.component';


const routes: Routes = [
  {
    path: '',
    component: FeatureCComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureCRoutingModule { }
