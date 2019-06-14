import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea} from '../models/model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {

  constructor(private db: AngularFirestore) { }

}
