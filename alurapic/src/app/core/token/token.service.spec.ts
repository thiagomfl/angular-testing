import { TokenService } from './token.service'

describe('O serviço TokenService', () => {
  let token, service;

  beforeEach(() => {
    token = 'wefqwefqwef';
    service = new TokenService();
  })

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('Deve guardar um token', () => {
    service.setToken(token);

    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe('wefqwefqwef');
  })

  it('Deve remover um token', () => {
    service.setToken(token)
    service.removeToken();

    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  })

  afterEach(() => {
    localStorage.clear();
  })
});
