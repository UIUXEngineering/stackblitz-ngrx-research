import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'stackblitz-ngrx-research-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {

  formInput = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
