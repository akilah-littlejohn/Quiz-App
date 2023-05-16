import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResultsService } from '../models/results.service';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
 
  
  `,
  styles: [],
  standalone: true,
  imports:[
    ResultsService
  ]
  
})
export class QuizComponent {
  
}
