import { Injectable } from '@angular/core';
import { LoginDialogComponent} from '../login-dialog/login-dialog.component';
import { MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  const userProperty = 'bb-user';
  user: string;

  constructor(public dialog: MatDialog) { }

  checkUser(): string {
    this.user = sessionStorage.getItem(this.userProperty);
    return (this.user) ? this.user : this.inputUserDialog();
  }

  inputUserDialog(): string {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      data: {user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      sessionStorage.setItem(this.userProperty, result);
      return result;
    });
  }

}
