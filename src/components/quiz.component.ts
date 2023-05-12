import { Component, EventEmitter, Output, inject } from '@angular/core';
import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
  
  
  `,
  styles: [],
  standalone: true,
})
export class QuizComponent {
  quiz = inject<QuizService>(QuizService);

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }
}
