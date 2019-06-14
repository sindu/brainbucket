import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Idea } from '../models/model';
import { IdeasService } from '../services/ideas.service';
import { Observable } from 'rxjs';
import { group } from '@angular/animations';

@Component({
  selector: 'app-create-idea-container',
  templateUrl: './create-idea-container.component.html',
  styleUrls: ['./create-idea-container.component.scss']
})
export class CreateIdeaContainerComponent implements OnInit, OnChanges {

  @Input() groupId: number;
  idea: Idea = this.resetIdea();
  constructor(
    private ideaService: IdeasService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.idea = this.resetIdea();
  }

  createIdea(idea: Idea) {
    this.ideaService.addIdeaToGroup(idea, this.groupId);
  }
  private resetIdea(): Idea {
    return {} as Idea;
  }
}
