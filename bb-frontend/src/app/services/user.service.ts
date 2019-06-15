import { Injectable } from '@angular/core';
import { LoginDialogComponent} from '../login-dialog/login-dialog.component';
import { MatDialog} from '@angular/material';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userProperty = 'bb-user';
  user: string;

  constructor(public dialog: MatDialog) { }

  getUser(): Observable<string> {
    return of(sessionStorage.getItem(this.userProperty));
  }

  checkUser(): Observable<string> {
    this.user = sessionStorage.getItem(this.userProperty);
    return (this.user) ? of(this.user) : this.inputUserDialog();
  }

  inputUserDialog(): Observable<string> {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      data: {user: this.user}
    });

    return dialogRef.afterClosed().pipe(tap(result => {
      console.log('The dialog was closed: ', result);
      if (result) {
        sessionStorage.setItem(this.userProperty, result);
      } else {
        sessionStorage.removeItem(this.userProperty);
      }
    }));
  }

}
