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
    console.log('getGroups called');
    return this.db.collection('groups').valueChanges();
    //return of(GROUPS_DATA);
  }

  createGroup(group: Group) {
    console.log(group);
  }
}



export class MyApp {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
}
