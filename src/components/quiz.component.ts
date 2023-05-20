import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { QuizService } from '../models/quiz.service';
import { ResultsService } from '../models/results.service';
import { QuestionComponent } from './question.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, startWith } from 'rxjs';
import { ResultComponent } from './result.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-quiz',
  template: `
  <main *ngIf="!resultService.showResult">
 <section >
  <h1>Angular Trivia</h1>
  <img src="https://res.cloudinary.com/akilah/image/upload/c_thumb,w_200,g_face/v1684349674/undraw_quiz_re_aol4_1_wfr7v6.svg" alt="man holding quiz"/>
 </section>

 <mat-horizontal-stepper   [orientation]="stepperOrientation$ | async" #stepper>

 <ng-template matStepperIcon="edit"></ng-template>

 <mat-step *ngFor="let question of quizService.getTriviaQuestions(); let i = index">
   <app-question [question]="question" (answerSelected)="resultService.onSelectedAnswer($event)"></app-question>

   <div class="actions">
     <button mat-button *ngIf="!quizService.LastStep(stepper)" (click)="stepper.next()">Next</button>
     <button mat-button *ngIf="quizService.LastStep(stepper)" (click)="resultService.submitTrivia()">Submit</button>
   </div>
   
 </mat-step>

</mat-horizontal-stepper> 
</main>
<app-result *ngIf="resultService.showResult"></app-result>
  `,
  styles: [
    `

section {
  height: 300px;
  display:flex;
  justify-content:center;
  }

  `,
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    QuestionComponent,
    ResultComponent,
    MatIconModule,
    MatButtonModule,
    RouterOutlet
  ],
})
export class QuizComponent {
  quizService = inject<QuizService>(QuizService);
  resultService = inject<ResultsService>(ResultsService);
  breakpointObserver = inject<BreakpointObserver>(BreakpointObserver);
  selectedAnswer: any;

  constructor(){}

  stepperOrientation$: Observable<any> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => (result.matches ? 'vertical' : 'horizontal')),
      startWith('horizontal') // Provide a default value
    );

  resetQuiz() {
    this.selectedAnswer = null;
    this.resultService.showResult = false
  }
} 
