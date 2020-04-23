import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserLoginComponent } from './user-login.component';
import { AddResourceComponent } from '../add-resource/add-resource.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [UserLoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [UserLoginComponent]
    }).compileComponents();
  });

  it('should create', () => {
    component = TestBed.get(UserLoginComponent);
    expect(component).toBeTruthy();
  });
});
