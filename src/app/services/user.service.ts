import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public get users$() {
    return this._users$$.asObservable();
  }

  private _users$$ = new Subject();

  private _defaultUsers = [
    {
      name: 'Ivan',
      surname: 'Ivanov',
      age: '30',
      email: 'ivanov@mail.ru'
    },
    {
      name: 'Petr',
      surname: 'Petrov',
      age: '28',
      email: 'petrov90@gmail.com'
    },
    {
      name: 'Alisa',
      surname: 'Krasivaya',
      age: '22',
      email: 'beauty123@gmail.com'
    },
  ];

  public initData() {
    this._users$$.next(this._defaultUsers);
  }

  public setUsers(users) {
    this._users$$.next(users);
  }

  public addUser(user) {
    this._defaultUsers.push(user);
    this.setUsers(this._defaultUsers);
  }

  public removeUser(email) {
    this._defaultUsers = this._defaultUsers.filter((user) => user.email !== email);
    this.setUsers(this._defaultUsers);
  }
}
