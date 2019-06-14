import { Injectable } from '@angular/core';
import { Group } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  getGroups(): Group[] {
    return [];
  }

  createGroup(group: Group) { }
}
