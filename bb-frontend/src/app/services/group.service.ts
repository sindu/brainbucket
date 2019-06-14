import { Injectable } from '@angular/core';
import { Group } from '../models/model';
import { GROUPS_DATA } from "../data/groups-data.ts";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    const groups = [] as Group[];
    console.log('getGroups called', groups);
    return GROUPS_DATA;
  }

  createGroup(group: Group) {
    console.log(group);
  }
}
