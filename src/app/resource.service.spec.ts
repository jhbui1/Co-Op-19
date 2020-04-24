import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ResourceService } from './resource.service';
import { HealthResourceTest } from './interfaces/health-resource-test'
import { HealthResource } from './interfaces/health-resource';
import { HealthService } from './interfaces/health-service';

describe('ResourceService', () => {
  //alternative to inject 
  let injector: TestBed;
  let service: ResourceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResourceService]
    })
    injector = getTestBed();
    service = injector.get(ResourceService);
    httpMock=injector.get(HttpTestingController);
  });

  afterEach(() => { 
    httpMock.verify();
  });

  it('should be created', 
    inject([HttpTestingController, ResourceService], 
      (httpMock:HttpTestingController,serv:ResourceService)=>{
        const service: ResourceService = TestBed.get(ResourceService);
        expect(service).toBeTruthy();
    })   
  );
  describe('#getHealthResource', ()=> {
    it('should return an Observable<HealthResource[]>', () => {
      const dummyGetRes:HealthResourceTest[] = [
        {
          "id": 58,
          "resourceId": 61,
          "providesTests": true,
          "testPrice": 2.0000,
          "gpsn": 32.728678,
          "gpsw": -97.104691,
          "city": "                              ",
          "address": "                                                            ",
          "state": "                                        ",
          "name": "Kaiser",
          "description": "",
          "services": null,

      },
      {
          "id": 59,
          "resourceId": 62,
          "providesTests": true,
          "testPrice": 0.0000,
          "gpsn": 32.728678,
          "gpsw": -97.104691,
          "city": "                              ",
          "address": "                                                            ",
          "state": "                                        ",
          "name": "anthem",
          "description": "",
          "services": null
      },
      {
          "id": 60,
          "resourceId": 71,
          "providesTests": true,
          "testPrice": 0.0000,
          "gpsn": 32.726625,
          "gpsw": -97.105506,
          "city": "                              ",
          "address": "                                                            ",
          "state": "                                        ",
          "name": "Fema",
          "description": "",
          "services": null
      },
      {
          "id": 61,
          "resourceId": 72,
          "providesTests": true,
          "testPrice": 0.0000,
          "gpsn": 32.726622,
          "gpsw": -97.105477,
          "city": "                              ",
          "address": "                                                            ",
          "state": "                                        ",
          "name": "FEMA",
          "description": "",
          "services": null
      }
      ];
      //w radius

      service.getHealthResources(32.726626,-97.105485).subscribe(users=> {
        expect(users.length).toBe(4);
        expect(users).toEqual(dummyGetRes);
      });
      const req = httpMock.expectOne(`${service.url+service.health_ctrl+"/32.726626/-97.105485/0.5"}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyGetRes);

       //wo radius
      service.getHealthResources(32.726626,-97.105485,0.5).subscribe(users=> {
        expect(users.length).toBe(4);
        expect(users).toEqual(dummyGetRes);
      });
      const reqExp = httpMock.expectOne(`${service.url+service.health_ctrl+"/32.726626/-97.105485/0.5"}`);
      expect(reqExp.request.method).toBe("GET");
      reqExp.flush(dummyGetRes);
    })
  })
  describe('addHealthResource', ()=> {
    it('should return an Observable<HealthResource>', () => {
      const dummyRes:HealthResource = 
      {
          "id": 61,
          "resourceId": 72,
          "providesTests": true,
          "serviceDesc": "",
          "serviceName" : "",
          "estCost" : 0,
          "testPrice": 0.0000,
          "gpsn": 32.726622,
          "gpsw": -97.105477,
          "city": "                              ",
          "address": "                                                            ",
          "state": "                                        ",
          "name": "FEMA",
          "description": "",
          "services": null
      };
      const respRes:HealthResourceTest = {
        "id": 61,
        "resourceId": 72,
        "providesTests": true,
        "testPrice": 0.0000,
        "gpsn": 32.726622,
        "gpsw": -97.105477,
        "city": "                              ",
        "address": "                                                            ",
        "state": "                                        ",
        "name": "FEMA",
        "description": "",
        "services": null
      }
      service.addHealthResource(dummyRes).then(users=> {
        expect(users.resourceId).toBe(72);
        expect(users).toEqual(dummyRes);
      });
      const req = httpMock.expectOne(`${service.url+service.health_ctrl}`);
      expect(req.request.method).toBe("POST");
      req.flush(dummyRes);

     
    })
  })
});
