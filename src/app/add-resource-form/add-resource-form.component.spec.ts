import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddResourceFormComponent } from './add-resource-form.component';
import { ResourceFormService } from '../resource-form.service';
import { ResourceService } from '../resource.service';
import { UserService } from '../user-service';

describe('AddResourceFormComponent', () => {
  let injector: TestBed;
  let component: AddResourceFormComponent;
  let formService: ResourceFormService;
  let resService: ResourceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResourceFormComponent ],
      imports: [HttpClientTestingModule],
      providers: [AddResourceFormComponent,ResourceFormService,UserService]
    })
    .compileComponents();
    injector = getTestBed();
    component = injector.get(AddResourceFormComponent);
    formService = injector.get(ResourceFormService);
    resService = injector.get(ResourceService);
  }));


  it('should create', () => {
    component = TestBed.get(AddResourceFormComponent);
    expect(component).toBeTruthy();
  });

  describe ('#setUserPos()',()=>{
    it('should set gpsn,gpsw', (done)=>{
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos=>{
          component.setUserPos(pos)
          expect(component.gpsn).toBeGreaterThan(-1000);
          expect(component.gpsw).toBeGreaterThan(-1000);
        });
        done();
      }
    })
  })

  describe('#getLocation()',()=>{
    it('should take the if navigator has geolocation', ()=>{
      component.getLocation();
      if(navigator.geolocation) {
        expect(component.setUserPos).toHaveBeenCalled;
      }else {
        expect(component.gpsn).toBe(-1000);
        expect(component.gpsw).toBe(-1000);
      }
    }); 
  })
  describe('#addHealthService()',()=>{
    it('should send health service', ()=>{
      component.addService=true;
      component.healthID = 1;
      component.addHealthService();
      expect(component.healthService.resourceId).toBeGreaterThan(0);
    }); 
    it('should add health resource if activated for first time', ()=> {
      component.addService=false;
      component.addHealthService();
      expect(resService.addHealthResource).toHaveBeenCalled;
    });
  })
  describe('#onSubmit()',()=>{
    it('should ', async()=>{
      component.userServ.loggedIn=true;
      component.resourceForm.addHealth = true;
      component.onSubmit();
      expect(component.added).toBeTrue();
    }); 
    it('should add health resource if activated for first time', async()=> {
      component.userServ.loggedIn=true;
      component.resourceForm.addConsumable = true;
      component.onSubmit();
      expect(component.added).toBeTrue();

    });
    it('should add health resource if activated for first time', async()=> {
      component.userServ.loggedIn=true;
      component.resourceForm.addShelter = true;
      component.onSubmit();
      expect(component.added).toBeTrue();

    });
    it('should not call any adds', ()=> {
      component.userServ.loggedIn=false;
      component.onSubmit();
      expect(component.added).toBeFalse();
    });
  })
});
