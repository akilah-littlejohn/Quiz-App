import {
  Component,
  OnInit,
  inject,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { Questions } from 'src/models/questions';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-question',
  template: `    
  <h2>{{ question.question }}</h2>
  <ul>
    <li *ngFor="let option of question.options">
      <label>
        <input
          type="radio"
          [value]="option"
          [(ngModel)]="selectedAnswer"
          (change)="optionSelected"
        />
        {{ option }}
      </label>
    </li>
  </ul>
`,
  styles: [],
  standalone: true,
  imports: [MatRadioModule, MatSnackBarModule],
})
export class QuestionComponent implements OnInit {

  quiz = inject<QuizService>(QuizService);
  snackbar = inject<MatSnackBar>(MatSnackBar);

  @Input() question: Questions;
  @Output() answerSelected = new EventEmitter<string>();

  selectedAnswer: string;

  optionSelect() {
    const message = this.selectedAnswer === this.question.answer ? 'Correct' : 'Incorrect';
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
