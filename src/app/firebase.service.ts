import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  answers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.answers = database.list('/answers')
  }

  getAnswers() {
    return this.answers;
  }
}
