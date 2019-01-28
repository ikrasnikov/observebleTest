import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public users = [];

  constructor(
    private _userService: UserService,
  ) {
    this._userService.users$
      .subscribe((users: TUser[]) => {
        this.users = users;
      });
  }
}
