import {
  Component,
  OnInit,
  inject,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './question.component';

import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-question',
  template: 
  `    
   
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
export class QuestionComponent implements OnInit {
  quiz = inject<QuizService>(QuizService);
  @Input() question: string;

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }

  ngOnInit() {}
}
