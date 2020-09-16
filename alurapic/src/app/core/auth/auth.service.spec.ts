import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.get(AuthService)
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should be instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('Should authenticate user', fakeAsync(() => {
    const fakeBody = {
      id: 1,
      name: 'Thiago',
      email: 'thiago@gmail.com'
    }

    const spy = spyOn(userService, 'setToken').and.returnValue(null);

    service.authenticate('Thiago', 's233').subscribe(res => {
      expect(res.body).toEqual(fakeBody);
      expect(spy).toHaveBeenCalledWith('tokenTest');
    });

    const request = httpMock.expectOne(req => req.method === 'POST');
    request.flush(fakeBody, { headers: { 'x-access-token': 'tokenTest'} });
    tick();
  }));
});
