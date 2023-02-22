import { Component } from '@angular/core';

@Component({
  selector: 'app-print.budge',
  templateUrl: './print.budge.component.html',
  styleUrls: ['./print.budge.component.css']
})
export class PrintBudgeComponent {

  typeFenceName: string = 'Vinyl fencing';
  modelFenceName: string = 'White california';
  heightFence: number = 1.7;
  longFence: number = 30;
  total: number = 3600;

}
