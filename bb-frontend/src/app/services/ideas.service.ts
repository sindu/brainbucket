import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea} from '../models/model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor(private db: AngularFirestore) { }

  getIdeasOfGroup(groupId: number): Observable<Idea[]> {
    return this.db.collection<Idea>('ideas', ref => ref.where('groupId', '==', groupId)).valueChanges();
  }

  addIdeaToGroup(idea: Idea, groupId: number) {
    console.log(idea, groupId);
  }
}
