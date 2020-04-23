import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddResourceTypeComponent } from './add-resource-type.component';

describe('AddResourceTypeComponent', () => {
  let component: AddResourceTypeComponent;
  let fixture: ComponentFixture<AddResourceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceTypeComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [AddResourceTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceTypeComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [AddResourceTypeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    component = TestBed.get(AddResourceTypeComponent);
    expect(component).toBeTruthy();
  });
});
