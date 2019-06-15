import { Injectable } from '@angular/core';
import { Group, Idea } from '../models/model';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private db: AngularFirestore) { }

  getIdeasOfGroup(groupId: string): Observable<Idea[]> {
    return this.db.collection<Group>('groups').doc<Group>(groupId).valueChanges()
      .pipe(map(group => group && group.ideas ? group.ideas : []));
  }

  getGroup(groupId: string): Observable<Group> {
    return this.db.collection<Group>('groups').doc<Group>(groupId).valueChanges();
  }

  addIdeaToGroup(idea: Idea, groupId: string) {
    const doc = this.db.collection<Group>('groups').doc<Group>(groupId);
    doc.valueChanges().pipe(first()).subscribe(data => {
      const ideas = data && data.ideas ? data.ideas : [];
      doc.update({ ...data, ideas: [...ideas, idea] });
    });
  }

  getGroups(): Observable<Array<Group>> {
    return this.db.collection<Group>('groups').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  createGroup(group: Group) {
    return from(this.db.collection<Group>('groups').add(group)).pipe(
      map(res => res.id)
    );
  }
}
