import { Component, OnInit, inject, Output, Input, EventEmitter } from '@angular/core';
import { MaterialModule } from 'src/material.module';
import { QuizService } from 'src/models/quiz.service';

@Component({
  selector: 'app-question',
  template: ``,
  styles: [],
  standalone: true,
  imports:[MaterialModule]
})
export class QuestionComponent implements OnInit {
  quiz = inject<QuizService>(QuizService);
  @Input()  question:string = ''

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }

  ngOnInit() {}
}
