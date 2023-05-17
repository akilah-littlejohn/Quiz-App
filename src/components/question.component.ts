import {
  Component,
  OnInit,
  inject,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { Questions } from '../models/questions';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../models/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  template: `    
  <h3>{{ question.question }}</h3>
    <mat-radio-group class="radio-btn" [(ngModel)]="selectedAnswer" (ngModelChange)="onOptionSelected()">
      <mat-radio-button *ngFor="let option of question.options" [value]="option">
        {{ option }}
      </mat-radio-button>
    </mat-radio-group>
`,
  styles: [
    `
  .radio-btn {
display: flex;
flex-direction:column;
  }
  `,
  ],
  standalone: true,
  imports: [MatRadioModule, MatSnackBarModule, FormsModule, CommonModule],
})
export class QuestionComponent implements OnInit {
  quiz = inject<QuizService>(QuizService);
  snackbar = inject<MatSnackBar>(MatSnackBar);

  @Input() question: Questions;
  @Output() answerSelected = new EventEmitter<string>();

  selectedAnswer: any;

  onOptionSelected() {
    this.answerSelected.emit(this.selectedAnswer);
  }
  optionSelect() {
    const message =
      this.selectedAnswer === this.question.answer ? 'Correct' : 'Incorrect';
    this.answerSelected.emit(this.selectedAnswer);
    this.openSnackBar(message);
  }

  openSnackBar(message: string) {
    this.snackbar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ngOnInit() {}
}
