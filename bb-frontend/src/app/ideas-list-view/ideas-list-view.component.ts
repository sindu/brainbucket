import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/model';
import { IdeasService } from '../services/ideas.service';

@Component({
  selector: 'app-ideas-list-view',
  templateUrl: './ideas-list-view.component.html',
  styleUrls: ['./ideas-list-view.component.scss']
})
export class IdeasListViewComponent implements OnInit {
  ideas$: Observable<Idea[]>;
  constructor(
    private ideaService: IdeasService
  ) { }

  ngOnInit() {
    this.ideas$ = this.ideaService.getIdeasOfGroup(0);
  }

}
