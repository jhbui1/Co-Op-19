import { TestBed } from '@angular/core/testing';

import { ResourceFormService } from './resource-form.service';

describe('ResourceFormService', () => {
  let service: ResourceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
