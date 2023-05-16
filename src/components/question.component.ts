import {
  Component,
  OnInit,
  inject,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { Questions } from 'src/models/questions';


import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-question',
  template: 
  `    
   
`,
  styles: [],
  standalone: true,
  imports: [
 
  ],})
export class QuestionComponent implements OnInit {

  quiz = inject<QuizService>(QuizService);
  @Input() question: Questions;

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }

  ngOnInit() {}
}
