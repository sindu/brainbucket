import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Idea, Group } from '../models/model';
import { GroupService } from '../services/group.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-idea-container',
  templateUrl: './create-idea-container.component.html',
  styleUrls: ['./create-idea-container.component.scss']
})
export class CreateIdeaContainerComponent implements OnInit, OnChanges {

  @Input() group: Group;
  idea: Idea = this.resetIdea();
  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.idea = this.resetIdea();
  }

  createIdea(idea: Idea) {
    this.groupService.addIdeaToGroup(idea, this.group.id);
    this.idea = this.resetIdea();
  }

  lockGroup() {
    this.groupService.lockGroup(this.group.id);
    this.router.navigate(['vote'], { relativeTo: this.route });
  }

  private resetIdea(): Idea {
    return {} as Idea;
  }
}
