import { Injectable, inject } from '@angular/core';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn:'root'
})
export class ResultsService {

showResult = false;
score = 0;
quizService = inject<QuizService>(QuizService);

onSelectedAnswer(answer:string){
  this.quizService.checkAnswer(answer)
}
getTriviaScore(){
  let count = 0;
  this.quizService.triviaQuestions.forEach((question, index) => {
    if (this.quizService.userAnswers[index] === question.answer) {
      count++;
    }
  });
  return (count/this.quizService.triviaQuestions.length * 100)

  }

  submitTrivia(){
    this.score = this.getTriviaScore()
  }
}



