import { isLowerCase } from './lower-case.validator';

describe('A função isLowerCase', () => {
  it('Deve confirmar quando recebe um texto em caixa baixa', () => {
    const value = 'thiago';
    const result = isLowerCase(value)

    expect(result).toBeTruthy();
  });

  it('Deve validar quando o valor enviado nao for caixa baixa', () => {
    expect(isLowerCase('Thiago')).toBeFalsy();
  })
});
