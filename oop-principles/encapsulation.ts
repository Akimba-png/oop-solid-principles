class User {
  username: string;
  password: string;
  private _id: number;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this._id = this._generateId();
  }

  private _generateId() {
    return (this.username + this.password).length;
  }

  get id() {
    return this._id;
  }
}

// Приватный метод _generateId является служебным
// т.е. предназначен для обеспечения работы внутренней логики класса
// и снаружи метод не виден (в том числе из-за соображений безопасности)
// таким образом метод _generateId() инкапсулирован и сокрыт внутри класса User

// Свойство _id так же является приватным,
// при этом получить его снаружи можно через публичный метод getId()
// Доступ к его изменению снаружи можно настроить, добавив метод сеттер;

const user = new User('test', 'test');
console.log(user.id);
