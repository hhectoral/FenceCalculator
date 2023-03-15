import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Router} from "@angular/router"


@Component({
  selector: 'app-print.budge',
  templateUrl: './print.budge.component.html',
  styleUrls: ['./print.budge.component.css']
})
export class PrintBudgeComponent {

  displayedColumns: string[] = ['amount', 'name', 'price', 'total'];
  dataSource = ELEMENT_DATA;

  typeFenceName: string = 'Vinyl fencing';
  modelFenceName: string = 'White california';
  heightFence: number = 1.7;
  longFence: number = 30;
  total: number = 3600;

  constructor(  private router: Router) {}

  print(): void {
    var data = document.getElementById('tablePrint');  //Id of the table
    html2canvas(data!!).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('FenceCalculatorPrint.pdf'); // Generated PDF
    });
  }

  home(): void {
    this.router.navigate(['/']);
  }
}


export interface FenceCalculatorTable {
  amount: number | null;
  name: string;
  price: number | null ;
  total: number | null;
}

const ELEMENT_DATA: FenceCalculatorTable[] = [
  {amount: 50, name: 'Vinyl fencing', price: null, total: null},
  {amount: 200, name: 'White california', price: null, total: null},
  {amount: 2, name: 'Height fence', price: null, total: null},
  {amount: 400, name: 'Perimeter', price: 25, total: 1000},
  {amount: null, name: 'Total', price: null, total: 36000},
];
