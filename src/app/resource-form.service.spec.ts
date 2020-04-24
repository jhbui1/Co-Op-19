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
  describe('#AddConsumable()', () => {
    it('should be true', () => {
      service.AddConsumable();
      expect(service.addConsumable).toBe(true);
      expect(service.addHealth).toBeFalse;
      expect(service.addShelter).toBeFalse;
    }) 
  })
  describe('#AddShelter()', () => {
    it('should be true', () => {
      service.AddShelter();
      expect(service.addShelter).toBe(true);
      expect(service.addHealth).toBeFalse;
      expect(service.addConsumable).toBeFalse;
    }) 
  })
  describe('#AddHealth()', () => {
    it('should be true', () => {
      service.AddHealth();
      expect(service.addHealth).toBe(true);
      expect(service.addShelter).toBeFalse;
      expect(service.addConsumable).toBeFalse;
    }) 
  })
});
