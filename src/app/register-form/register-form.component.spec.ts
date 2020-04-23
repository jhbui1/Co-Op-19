import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [HttpClientTestingModule],
      providers: [RegisterFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [HttpClientTestingModule],
      providers: [RegisterFormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const comp:RegisterFormComponent=TestBed.get(RegisterFormComponent)
    expect(comp).toBeTruthy();
  });
});
