import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ResourceService } from './resource.service';

describe('ResourceService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResourceService]
    }));

  it('should be created', 
    inject([HttpTestingController, ResourceService], 
      (httpMock:HttpTestingController,serv:ResourceService)=>{
        const service: ResourceService = TestBed.get(ResourceService);
        expect(service).toBeTruthy();
    })   
  );
});
