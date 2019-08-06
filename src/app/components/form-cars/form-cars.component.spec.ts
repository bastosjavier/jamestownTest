import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarsComponent } from './form-cars.component';

describe('FormCarsComponent', () => {
  let component: FormCarsComponent;
  let fixture: ComponentFixture<FormCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
