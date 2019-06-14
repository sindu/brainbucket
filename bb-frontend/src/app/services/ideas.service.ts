import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/model';
import { IDEAS_DATA } from '../data/ideas-data';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor() { }

  getIdeasOfGroup(groupId: number): Observable<Idea[]> {
    return new Observable((observer) => {
      const data = IDEAS_DATA;
      observer.next(data.filter(idea => idea.groupId === groupId));
    });
  }

  addIdeaToGroup(idea: Idea, groupId: number) {
    console.log(idea, groupId);
  }
}
