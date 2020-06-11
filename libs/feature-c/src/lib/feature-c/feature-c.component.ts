import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'stackblitz-ngrx-research-feature-c',
  templateUrl: './feature-c.component.html',
  styleUrls: ['./feature-c.component.scss']
})
export class FeatureCComponent implements OnInit {

  formInput = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
