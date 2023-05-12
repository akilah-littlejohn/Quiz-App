import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { QuizService } from '../models/quiz.service';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
  
  
  `,
  styles: [],
  standalone: true,
})
export class QuizComponent implements OnInit {

  quiz = inject<QuizService>(QuizService);
 
  @Output() answerSelected = new EventEmitter<string>();

  ngOnInit() {}
}
