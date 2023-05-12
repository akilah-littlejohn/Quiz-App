import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { QuizService } from 'src/models/quiz.service';

@Component({
  selector: 'app-question',
  template: ``,
  styles: [],
  standalone: true,
})
export class QuestionComponent implements OnInit {
  quiz = inject<QuizService>(QuizService);

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }

  ngOnInit() {}
}
