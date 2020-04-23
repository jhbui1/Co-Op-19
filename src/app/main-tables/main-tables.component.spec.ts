import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTablesComponent } from './main-tables.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainTablesComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTablesComponent ],
      imports: [HttpClientTestingModule],
      providers: [MainTablesComponent] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTablesComponent ],
      imports: [HttpClientTestingModule],
      providers: [MainTablesComponent] 
    })
    .compileComponents();
  });

  it('should create', () => {
    const component:MainTablesComponent=TestBed.get(MainTablesComponent)
    expect(component).toBeTruthy();
  });
});
