import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service'
import { TokenService } from '../token/token.service';

describe('O serviço UserService', () => {
  let service, token;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    service = TestBed.get(UserService);

    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU5OTI2ODk4NiwiZXhwIjoxNTk5MzU1Mzg2fQ.mUrqqxr_LV_o-eMYnW-Ze56ppWUx9NPtSzj4ZjVNlGQ';
    service.setToken(token);
  })

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('Deve atraves de um token recuperar as informações de um usuario', () => {
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe('flavio');
    service.getUser().subscribe(user => expect(user.name).toBe('flavio'))
  })

  it('Deve limpar as informações no logout', () => {
    service.logout();

    expect(service.isLogged()).toBeFalsy();
    expect(service.getUserName()).toBeFalsy();
  })
});
