import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class UserService {

  private _users$$: Subject<TUser[]> = new Subject();


  public constructor(
    private _httpClient: HttpClient,
  ) {}

  public getUsersFromAPI() {
    return this._httpClient.get('https://next.json-generator.com/api/json/get/E1HDvnx1I');
  }

  public getUsers(): Observable<TUser[]> {
    return this._users$$.asObservable();
  }

  public updateUsers(users: TUser[]): void {
    this._users$$.next(users);
  }
}
