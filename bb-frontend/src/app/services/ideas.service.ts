import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Idea } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor() { }

  getIdeasOfGroup(groupId: number): Observable<Idea[]> {
    return of([{ name: '123' } as Idea]);
  }

  addIdeaToService(idea: Idea) {
    console.log(idea);
  }
}
