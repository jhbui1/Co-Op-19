import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddResourceFormComponent } from './add-resource-form.component';

describe('AddResourceFormComponent', () => {
  let component: AddResourceFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceFormComponent ],
      imports: [HttpClientTestingModule],
      providers: [AddResourceFormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    component = TestBed.get(AddResourceFormComponent);
    expect(component).toBeTruthy();
  });
});
