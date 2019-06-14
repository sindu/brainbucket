import { Injectable } from '@angular/core';
import { Group } from '../models/model';
import { of, Observable } from 'rxjs';
import { GROUPS_DATA } from '../data/groups-data';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private db: AngularFirestore) { }

  getGroups(): Observable<Array<Group>> {
    return this.db.collection('groups').valueChanges();
  }

  createGroup(group: Group) {
    console.log(group);
  }
}
