import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    MatStepperModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }