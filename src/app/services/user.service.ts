import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {

  public constructor(
    private _httpClient: HttpClient,
  ) {}

  public getUsers() {
    return this._httpClient.get('https://next.json-generator.com/api/json/get/E1HDvnx1I');
  }
}
