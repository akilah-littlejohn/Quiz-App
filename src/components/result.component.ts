import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../models/results.service';

@Component({
  selector: 'app-result',
  template: ` <h1>You Scored {{this.rs.score }} </h1>`,
  styles: [],
  standalone:true,
  imports:[]

})
export class ResultComponent implements OnInit {

  constructor(public rs:ResultsService) { }

  ngOnInit() {
  }

}