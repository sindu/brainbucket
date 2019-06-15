import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../models/model';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {


  @Input() group: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

}
