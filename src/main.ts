import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { QuizComponent } from './components/quiz.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './route';



bootstrapApplication(QuizComponent, {
  providers:[importProvidersFrom(BrowserAnimationsModule),
  provideRouter(routes)]
});
