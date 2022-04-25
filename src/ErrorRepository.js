export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      [1, 'Ошибка чтения файла'],
      [2, 'Ошибка авторизации'],
      [3, 'Ошибка записи в базу данных'],
      [4, 'Ошибка выбора профессии'],
    ]);
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}
