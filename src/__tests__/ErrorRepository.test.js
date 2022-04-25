import ErrorRepository from '../ErrorRepository';

test('ErrorRepository test', () => {
  const errorDB = new ErrorRepository();
  expect(errorDB.translate(2)).toBe('Ошибка авторизации');
});

test('ErrorRepository Error test', () => {
  const errorDB = new ErrorRepository();
  expect(errorDB.translate(5)).toBe('Unknown error');
});
