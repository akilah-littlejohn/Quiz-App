import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-quiz',
  template: `
  
  <h1>Angular Trivia</h1>
  
  <mat-stepper>
  <mat-step>
  
  </mat-step>
  
</mat-stepper>
  
  `,
  styles: [],
  standalone: true,
  imports: [ CommonModule, MatStepperModule,MatIconModule, MatRadioModule,MatSnackBarModule,MatButtonModule],
})
export class QuizComponent {}
