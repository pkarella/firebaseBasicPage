import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  id;
  answer;
  constructor(private firebaseService: FirebaseService, route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getAnswerById(this.id).subscribe(answerFB => {
      this.answer = answerFB;
    })
  }

}
