import { Component, OnInit } from '@angular/core';
import { Group } from '../models/model';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group-view',
  templateUrl: './create-group-view.component.html',
  styleUrls: ['./create-group-view.component.scss']
})
export class CreateGroupViewComponent implements OnInit {
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
