import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
  
  
  `,
  styles: [],
  standalone: true,
  imports: [MaterialModule, CommonModule],
})
export class QuizComponent {}
