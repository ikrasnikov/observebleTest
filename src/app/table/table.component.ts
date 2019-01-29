import { Component, OnDestroy } from '@angular/core';

import { catchError, filter, map, takeUntil, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy {

  public users: TUser[] = [];
  public females: TUser[] = [];
  public femalesYonger50: TUser[] = [];


  private _destroy$$ = new Subject();


  constructor(
    private _userService: UserService,
  ) {
    this._userService.getUsers()
      .pipe(
        tap((users: TUser[]) => {
          this.users = users;
        }),
        map((users) => users.filter((user) => user.sex === 'female')),
        tap((females) => {
          this.females = females;
        }),
        filter((females) => females.some((female) => female.isActive)),
        map((females) => females.filter((female) => female.age < 50)),
        takeUntil(this._destroy$$),
        catchError((error: HttpErrorResponse) => {
          return of();
        })
      )
      .subscribe((femalesYonger50: TUser[]) => {
        this.femalesYonger50 = femalesYonger50;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
  }
}
