import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Idea } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor() { }

  getIdeasOfGroup(groupId: number): Observable<Idea[]> {
    console.log(groupId);
    return of([
      { name: 'first idea', url: 'https://www.google.com' } as Idea,
      { name: 'second idea', url: 'https://www.google.com' } as Idea
    ]);
  }

  addIdeaToGroup(idea: Idea, groupId: number) {
    console.log(idea, groupId);
  }
}
