import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/model';
import { GroupService } from '../services/group.service';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})

export class GroupsListComponent implements OnInit {

  groups$: Observable<Array<Group>>;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groups$ = this.groupService.getGroups();
  }

  trackByGroupId(index, group) {
    return group.id;
  }
}
