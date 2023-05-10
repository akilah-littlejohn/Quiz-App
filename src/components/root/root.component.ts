import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styles: [],
  standalone:true,
  imports:[CommonModule]
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}