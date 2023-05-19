import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResultsService } from '../models/results.service';

@Component({
  selector: 'app-result',
  template: ` 
  <h1>You Scored {{this.results.score }} % </h1>
  <button mat-raised-button color="primary">Retake Trivia!</button>


  `,
  styles: [`
  button {
    font-size:1em
  }
  `],
  standalone: true,
  imports: [MatButtonModule],
})
export class ResultComponent implements OnInit {
  results = inject<ResultsService>(ResultsService);

  ngOnInit() {}
}
