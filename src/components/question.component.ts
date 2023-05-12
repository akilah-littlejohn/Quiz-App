import {
  Component,
  OnInit,
  inject,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-question',
  template: 
  `    
    <p> {{ question }} </p>
    <label><input type="radio" name="" [value]=""></label>
`,
  styles: [],
  standalone: true,
  imports: [],
})
export class QuestionComponent implements OnInit {
  quiz = inject<QuizService>(QuizService);
  @Input() question: string = '';

  @Output() answerSelected = new EventEmitter<string>();

  optionSelect(option: string) {
    this.answerSelected.emit(option);
  }

  ngOnInit() {}
}
