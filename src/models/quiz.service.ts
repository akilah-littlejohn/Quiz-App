import { Injectable } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  triviaQuestions: Questions[] = [
    {
      question: 'What is the purpose of Angular CLI?',
      options: [
        'A. Building Angular applications',
        'B. Managing Angular dependencies',
        'C. Creating Angular components',
        'D. All of the above',
      ],
      answer: 'D. All of the above',
    },
    {
      question:
        'Which decorator is used to mark a class as an Angular component?',
      options: [
        'A. @Component',
        'B. @NgModule',
        'C. @Injectable',
        'D. @Directive',
      ],
      answer: 'A. @Component',
    },
    {
      question: 'What is the purpose of NgOnInit lifecycle hook?',
      options: [
        'A. To initialize data in a component',
        'B. To handle user input events',
        'C. To destroy a component',
        'D. None of the above',
      ],
      answer: 'A. To initialize data in a component',
    },
    {
      question: 'What is Angular CLI command to generate a new component?',
      options: [
        'A. ng generate component',
        'B. ng new component',
        'C. ng add component',
        'D. ng create component',
      ],
      answer: 'A. ng generate component',
    },
    {
      question: 'Which module is used for making HTTP requests in Angular?',
      options: [
        'A. HttpClientModule',
        'B. HttpModule',
        'C. AngularHttpModule',
        'D. AngularHttpClientModule',
      ],
      answer: 'A. HttpClientModule',
    },
    {
      question: 'What is the purpose of Angular router outlet?',
      options: [
        'A. To display the component content based on the current route',
        'B. To handle HTTP requests',
        'C. To provide dependency injection',
        'D. To handle form validation',
      ],
      answer: 'A. To display the component content based on the current route',
    },
    {
      question:
        'Which operator is used for handling asynchronous operations in Angular?',
      options: ['A. pipe()', 'B. map()', 'C. subscribe()', 'D. async/await'],
      answer: 'C. subscribe()',
    },
    {
      question: 'What is Angular directive?',
      options: [
        'A. A reusable UI component',
        'B. A service for dependency injection',
        'C. A function that modifies the DOM',
        'D. A data binding expression',
      ],
      answer: 'C. A function that modifies the DOM',
    },
  ];

  #questionIndex = 0;
  userAnswers: { [choiceNumber: number]: string } = {};

  getTriviaQuestions() {
    return this.triviaQuestions;
  }
  checkAnswer(answer: string) {
    this.userAnswers[this.#questionIndex] = answer;
    console.log(this.userAnswers)
  }
  nextQuestion() {
    this.#questionIndex++;
  }

  lastQuestion() {
    return this.#questionIndex === this.triviaQuestions.length - 1;
  }

  LastStep(stepper:MatStepper): boolean {
    return stepper.selectedIndex === this.triviaQuestions.length - 1;
  }
}
