import { Component, OnInit, inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ResultsService } from '../models/results.service';

@Component({
  selector: 'app-result',
  template: ` <h1>You Scored {{this.results.score }} </h1>
  <button mat-raised-button color="primary">Retake It!</button>


  `,
  styles: [],
  standalone: true,
  imports: [MatButtonModule],
})
export class ResultComponent implements OnInit {
  results = inject<ResultsService>(ResultsService);

  ngOnInit() {}
}
