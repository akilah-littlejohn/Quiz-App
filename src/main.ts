import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuizComponent } from './components/quiz.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



bootstrapApplication(QuizComponent, {
  providers:[importProvidersFrom(BrowserAnimationsModule)]
 
});
