import { Routes } from "@angular/router";
import { QuestionComponent } from "./components/question.component";

export const routes:Routes = [{
  path:'', component:QuestionComponent
},
{
  path: 'result',
  loadComponent: () =>
    import('./components/result.component').then((x) => x.ResultComponent),
}

]