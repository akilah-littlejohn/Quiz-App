import { Injectable, inject } from '@angular/core';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  showResult = false;
  score = 0;
  quizService = inject<QuizService>(QuizService);

  onSelectedAnswer(selectedAnswer: string) {
    this.quizService.checkAnswer(selectedAnswer);
  }

  getTriviaScore() {
    let count = 0;
    this.quizService.triviaQuestions.forEach((question, index) => {
      if (this.quizService.allUserAnswers[index] === question.answer) {
        count++;
      }
    });
   this.score = (count / this.quizService.triviaQuestions.length) * 100;
   
  }
  
  submitTrivia() {
    this.showResult = true;
    this.getTriviaScore()

  }
}
