import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrintBudgeComponent } from './print/print.budge/print.budge.component';
import { NotFoundComponent } from './not.found/not.found.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'print', component: PrintBudgeComponent },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  PrintBudgeComponent,
  NotFoundComponent
]
