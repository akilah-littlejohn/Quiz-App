import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { QuizService } from '../models/quiz.service';
import { ResultsService } from '../models/results.service';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  <mat-vertical-stepper  #stepper>
      <mat-step *ngFor="let question of quizService.getTriviaQuestions(); let i = index">
        <ng-template matStepLabel>Question {{ i + 1 }}</ng-template>
        <app-question [question]="question" (answerSelected)="resultService.onSelectedAnswer($event)"></app-question>
        <div class="actions">
          <button mat-button *ngIf="!quizService.LastStep(stepper)" (click)="stepper.next()">Next</button>
          <button mat-button *ngIf="quizService.LastStep(stepper)" (click)="resultService.submitTrivia()">Submit</button>
        </div>
      </mat-step>
    </mat-vertical-stepper>

 
  
  `,
  styles: [],
  standalone: true,
  imports: [CommonModule, MatStepperModule, QuestionComponent, MatIconModule],
})
export class QuizComponent {
  quizService = inject<QuizService>(QuizService);
  resultService = inject<ResultsService>(ResultsService);

  f() {
    this.resultService.getTriviaScore;
    this.quizService.LastStep;
  }
}
