import { Injectable } from '@angular/core';
import { Group } from '../models/model';
import {from, Observable} from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private db: AngularFirestore) { }

  getGroups(): Observable<Array<Group>> {
    return this.db.collection<Group>('groups').valueChanges();
  }

  createGroup(group: Group) {
    return from(this.db.collection<Group>('groups').add(group)).pipe(
      map(res => res.id)
    );

  }
}
