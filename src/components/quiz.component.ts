import {
  Component,
  OnInit,
  EventEmitter,
  Input,
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
  @Input() trivia: string = '';
  @Input() options: string[] = [];
  @Output() answerSelected = new EventEmitter<string>();

  ngOnInit() {}
}
