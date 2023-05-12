import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-result',
  template: ``,
  styles: [],
  standalone:true,
  imports:[MaterialModule]
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}