import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BrainBucket-Frontend';
  user$: Observable<string>;

  constructor(private userService: UserService) {}


  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}

