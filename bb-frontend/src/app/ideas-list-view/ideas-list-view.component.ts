import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Idea, Group } from '../models/model';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-ideas-list-view',
  templateUrl: './ideas-list-view.component.html',
  styleUrls: ['./ideas-list-view.component.scss']
})
export class IdeasListViewComponent implements OnInit {
  ideas$: Observable<Idea[]>;
  group$: Observable<Group>;
  idea: Idea;
  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.group$ = this.activatedRoute.params.pipe(switchMap(params => this.groupService.getGroup(params.id)));
    this.ideas$ = this.group$.pipe(map(group => group && group.ideas ? group.ideas : []));
  }

  addIdeaToGroup(idea: Idea) {
    this.activatedRoute.params.subscribe(params => this.groupService.addIdeaToGroup(idea, params.id));
  }

  trackById(index, idea) {
    return idea.id;
  }
}
