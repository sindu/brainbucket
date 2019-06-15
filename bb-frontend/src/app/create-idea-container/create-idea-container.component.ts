import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Idea } from '../models/model';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-create-idea-container',
  templateUrl: './create-idea-container.component.html',
  styleUrls: ['./create-idea-container.component.scss']
})
export class CreateIdeaContainerComponent implements OnInit, OnChanges {

  @Input() groupId: string;
  idea: Idea = this.resetIdea();
  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.idea = this.resetIdea();
  }

  createIdea(idea: Idea) {
    this.groupService.addIdeaToGroup(idea, this.groupId);
    this.idea = this.resetIdea();
  }
  private resetIdea(): Idea {
    return {} as Idea;
  }
}
