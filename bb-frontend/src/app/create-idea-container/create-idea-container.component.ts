import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../models/model';
import { IdeasService } from '../services/ideas.service';
import { Observable } from 'rxjs';
import { group } from '@angular/animations';

@Component({
  selector: 'app-create-idea-container',
  templateUrl: './create-idea-container.component.html',
  styleUrls: ['./create-idea-container.component.scss']
})
export class CreateIdeaContainerComponent implements OnInit {
  @Input() groupId: number;
  idea: Idea = {} as Idea;
  constructor(
    private ideaService: IdeasService
  ) { }

  ngOnInit() {
  }

  createIdea(idea: Idea) {
    this.ideaService.addIdeaToGroup(idea, this.groupId);
  }
}
