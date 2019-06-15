import { Injectable } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userProperty = 'bb-user';
  user: string;
  userSub$ = new BehaviorSubject<string>('user');


  constructor(public dialog: MatDialog) { }

  getUser(): Observable<string> {
    return this.userSub$;
  }

  checkUser(): Observable<string> {
    this.user = sessionStorage.getItem(this.userProperty);
    this.userSub$.next(this.user);
    return (this.user) ? this.userSub$ : this.inputUserDialog();
  }

  inputUserDialog(): Observable<string> {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      data: { user: this.user }
    });

    return dialogRef.afterClosed().pipe(tap(result => {
      console.log('The dialog was closed: ', result);
      if (result) {
        sessionStorage.setItem(this.userProperty, result);
        this.userSub$.next(result);
      } else {
        sessionStorage.removeItem(this.userProperty);
      }
    }));
  }

}
