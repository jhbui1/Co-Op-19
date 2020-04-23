import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HealthDetailComponent } from './health-detail.component';

describe('HealthDetailComponent', () => {
  let component: HealthDetailComponent;
  let fixture: ComponentFixture<HealthDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDetailComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [HealthDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDetailComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [HealthDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    component = TestBed.get(HealthDetailComponent);
    expect(component).toBeTruthy();
  });
});
