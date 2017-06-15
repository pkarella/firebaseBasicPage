import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service'
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';
import { EditAnswerComponent } from './edit-answer/edit-answer.component';
import { AnswerComponent } from './answer/answer.component';
import { AnswersComponent } from './answers/answers.component';

const appRoutes: Routes = [
  {path: '', component:AnswersComponent },
  {path: 'add-answer', component: AddAnswerComponent},
  {path: 'answers/:id', component: AnswerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddAnswerComponent,
    EditAnswerComponent,
    AnswerComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
