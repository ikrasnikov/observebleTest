import { Component, OnDestroy } from '@angular/core';

import { catchError, filter, map, takeUntil, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy {

  public users: TUser[] = [];
  public newUsers: TUser[] = [];


  private _destroy$$ = new Subject();


  constructor(
    private _userService: UserService,
  ) {
    this._userService.getUsersFromAPI()
      .subscribe((users: TUser[]) => {
        this._userService.updateUsers(users);
      });

    this._userService.getUsers()
      .pipe(
        takeUntil(this._destroy$$)
      )
      .subscribe((users: TUser[]) => {
        this.users = users;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
  }

  public newSubscription(): void {
    this._userService.getUsers()
      .pipe(
        takeUntil(this._destroy$$)
      )
      .subscribe((users: TUser[]) => {
        this.newUsers = users;
      });
  }

  public updateUsers(): void {
    this._userService.updateUsers(this.users);
  }
}
