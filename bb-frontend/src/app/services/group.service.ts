import { Injectable } from '@angular/core';
import { Group } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  getGroups(): Group[] {
    const groups = [] as Group[];
    console.log('getGroups called', groups);
    return groups;
  }

  createGroup(group: Group) {
    console.log(group);
  }
}
