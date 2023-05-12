import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
 
  
  `,
  styles: [],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatButtonModule,
    QuestionComponent
  ],
})
export class QuizComponent {}
