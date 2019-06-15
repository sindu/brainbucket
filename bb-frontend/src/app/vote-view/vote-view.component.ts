import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/model';
import { GroupService } from '../services/group.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-vote-view',
  templateUrl: './vote-view.component.html',
  styleUrls: ['./vote-view.component.scss']
})
export class VoteViewComponent implements OnInit {

  ideas$: Observable<Idea[]>;
  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ideas$ = this.activatedRoute.params.pipe(
      switchMap(params => this.groupService.getGroup(params.id)),
      map(group => group && group.ideas ? group.ideas : []));
  }

  change(event: MatSelectionListChange) {
    const optionList = event.source.selectedOptions.selected;
    const ideaNames = optionList.map(option => option.value);

    this.activatedRoute.params.subscribe(params => this.groupService.addUser(params.id, ideaNames, 'testuser'));
  }
}
