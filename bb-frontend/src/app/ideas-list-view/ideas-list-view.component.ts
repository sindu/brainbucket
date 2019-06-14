import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Idea } from '../models/model';
import { IdeasService } from '../services/ideas.service';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-ideas-list-view',
  templateUrl: './ideas-list-view.component.html',
  styleUrls: ['./ideas-list-view.component.scss']
})
export class IdeasListViewComponent implements OnInit {
  ideas$: Observable<Idea[]>;
  groupId$: Observable<number>;
  idea: Idea;
  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ideas$ = this.activatedRoute.params.pipe(switchMap(params => this.groupService.getIdeasOfGroup(params.id)));
    this.groupId$ = this.activatedRoute.params.pipe(map(params => params.id));
  }

  addIdeaToGroup(idea: Idea) {
    this.activatedRoute.params.subscribe(params => this.groupService.addIdeaToGroup(idea, params.id));
  }

  trackById(index, idea) {
    return idea.id;
  }
}
