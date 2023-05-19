import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResultsService } from '../models/results.service';

@Component({
  selector: 'app-result',
  template: ` 
  <section>
  <h3>
  {{ this.results.score >= 70 ? 'Great Job!' : 'Sorry, You Probably Should Study More.'}}
</h3>

<img *ngIf="this.results.score >= 70" src="https://res.cloudinary.com/akilah/image/upload/v1684516561/undraw_well_done_re_3hpo_etkh1v.svg" alt="Well Done Image">

<img *ngIf="this.results.score < 70" src="https://res.cloudinary.com/akilah/image/upload/v1684516592/undraw_feeling_blue_-4-b7q_hrvwxk.svg">



  <h1>You Scored {{this.results.score }} % </h1>

  <section>
  <button mat-raised-button color="primary">Retake Trivia!</button>



  `,
  styles: [
    `
    section {
      height: 300px;
      display:flex;
      flex-direction:column;
      align-items:center;
      }
    
  button {
    font-size:1em
    padding:2em;
  }

  img {
    width:200px;
    height:200px;
  }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, CommonModule],
})
export class ResultComponent implements OnInit {
  results = inject<ResultsService>(ResultsService);

  ngOnInit() {}
}
