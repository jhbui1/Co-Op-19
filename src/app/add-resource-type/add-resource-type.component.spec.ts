import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceTypeComponent } from './add-resource-type.component';

describe('AddResourceTypeComponent', () => {
  let component: AddResourceTypeComponent;
  let fixture: ComponentFixture<AddResourceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
