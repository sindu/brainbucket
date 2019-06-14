import { Injectable } from '@angular/core';
import { Group } from '../models/model';
import { of, Observable } from 'rxjs';
import { GROUPS_DATA } from '../data/groups-data';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Observable<Group[]> {
    console.log('getGroups called');
    return of(GROUPS_DATA);
  }

  createGroup(group: Group) {
    console.log(group);
  }
}
