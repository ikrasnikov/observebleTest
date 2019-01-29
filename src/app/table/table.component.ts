import { Component, OnDestroy } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy {

  public users = [];


  private _destroy$$ = new Subject();


  constructor(
    private _userService: UserService,
  ) {
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
}
