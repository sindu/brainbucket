import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Idea } from '../models/model';
import { IdeasService } from '../services/ideas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ideas-list-view',
  templateUrl: './ideas-list-view.component.html',
  styleUrls: ['./ideas-list-view.component.scss']
})
export class IdeasListViewComponent implements OnInit {
  ideas$: Observable<Idea[]>;
  idea: Idea;
  constructor(
    private ideaService: IdeasService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ideas$ = this.activatedRoute.params.pipe(switchMap(params => this.ideaService.getIdeasOfGroup(+params.id)));
  }

  addIdeaToGroup(idea: Idea) {
    this.activatedRoute.params.subscribe(params => this.ideaService.addIdeaToGroup(idea, +params.id));
  }

  trackById(index, idea) {
    return idea.id;
  }
}
