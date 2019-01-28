import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  public generateIsShown = true;


  private _newUser = {};

  constructor(
    private _userService: UserService,
  ) { }

  public setUserField(event, fieldName) {
    this._newUser[fieldName] = event.target.value;
  }

  public addUser() {
    this._userService.addUser(this._newUser);
  }

  public removeUser(email) {
    this._userService.removeUser(email);
  }

  public generateTable() {
    this._userService.initData();
    this.generateIsShown = !this.generateIsShown;
  }
}
