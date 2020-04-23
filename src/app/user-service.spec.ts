import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { UserService } from './user-service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[UserService]
    }));

  it('should be created', () => {
    const serv:UserService = TestBed.get(UserService);
    expect(serv).toBeTruthy();
  });

});
