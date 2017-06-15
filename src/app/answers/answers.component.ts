import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.answers = this.firebaseService.getAnswers();
  }

  

}
