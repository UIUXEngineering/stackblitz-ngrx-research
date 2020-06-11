import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSharedComponent } from './common-shared.component';

describe('CommonComponent', () => {
  let component: CommonSharedComponent;
  let fixture: ComponentFixture<CommonSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
