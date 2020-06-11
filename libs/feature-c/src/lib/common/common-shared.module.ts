import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonSharedComponent } from './common-shared.component';



@NgModule({
  declarations: [CommonSharedComponent],
  exports: [CommonSharedComponent],
  imports: [
    CommonModule
  ]
})
export class CommonSharedModule { }
