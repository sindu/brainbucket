import { Component, OnInit } from '@angular/core';
import { Group } from '../models/model';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-group-view',
  templateUrl: './new-group-view.component.html',
  styleUrls: ['./new-group-view.component.scss']
})
export class NewGroupViewComponent implements OnInit {
  group: Group = {} as Group;
  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  createGroup(group: Group) {
    this.groupService.createGroup(group);
    this.router.navigate([0]);
  }
}
