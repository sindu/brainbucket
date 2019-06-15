import { Injectable } from '@angular/core';
import { Group, Idea } from '../models/model';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupCollectionIdentifier = 'groups';
  constructor(private db: AngularFirestore) { }

  private getGroupCollection() {
    return this.db.collection<Group>(this.groupCollectionIdentifier);
  }

  getGroup(groupId: string): Observable<Group> {
    return this.getGroupCollection().doc<Group>(groupId).snapshotChanges().pipe(map(a => {
      const data = a.payload.data();
      const id = a.payload.id;
      return { id, ...data };

    }));
  }

  addIdeaToGroup(idea: Idea, groupId: string) {
    const doc = this.getGroupCollection().doc<Group>(groupId);
    doc.valueChanges().pipe(first()).subscribe(data => {
      const ideas = data && data.ideas ? data.ideas : [];
      doc.update({ ...data, ideas: [...ideas, idea] });
    });
  }

  lockGroup(id: string) {
    const doc = this.getGroupCollection().doc<Group>(id);
    doc.valueChanges().pipe(first()).subscribe(data => {
      const ideas = data && data.ideas ? data.ideas : [];
      doc.update({ ...data, locked: true });
    });
  }

  getGroups(): Observable<Array<Group>> {
    return this.getGroupCollection().snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  createGroup(group: Group) {
    return from(this.getGroupCollection().add(group)).pipe(
      map(res => res.id)
    );
  }

  addUser(groupId: string, ideaNames: string[], userName: string): void {
    const doc = this.getGroupCollection().doc<Group>(groupId);
    doc.valueChanges().pipe(first()).subscribe(group => {
      const ideas = group && group.ideas ? group.ideas : [];

      const changedIdeas = ideas.map(idea => {
        const shouldContainUser = ideaNames
          .map(ideaName => ideaName === idea.name)
          .reduce((reduced, next) => reduced || next, false);

        if (shouldContainUser) {
          idea.users = idea.users ? idea.users : [];
          idea.users.push(userName);
        }
        return idea;
      });
      doc.update({ ...group, ideas: changedIdeas });
    });
  }
}
