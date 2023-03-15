import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {Router} from "@angular/router"


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public modelFence: string = "";
  public typeFence: string = "";
  public heightFence: number = 0;
  public longFence: number = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router
     ) { }

  openDialog(messageShow: string): void {
    var enterAnimationDuration = '300ms';
    var exitAnimationDuration = '300ms';
    let tmpdiag = this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    tmpdiag.componentInstance.message = messageShow;
  }

  public budget(): void {

    var priceMeter = 0;
    //Get price for Meter
    switch (this.typeFence) {
      case '1': priceMeter = this.getPriceWood(); break;
      case '2': priceMeter = this.getPriceVinyl(); break;
      case '3': priceMeter = this.getPriceAluminium(); break;
      case '4': priceMeter = this.getPriceSteel(); break;
      case '5': priceMeter = this.getPriceChainLink(); break;
      default: this.openDialog('You must select a type fence first'); break;
    }

    if (priceMeter <= 0) { return; }

    //Calculate budge with the data
    var finalBudge = priceMeter * this.heightFence;

    //Generate a printable format
    this.router.navigate(['/print']);

  }

  public getPriceWood(): number {
    return 10 * this.getModelFence();
  }
  public getPriceVinyl(): number {
    return 20 * this.getModelFence();
  }
  public getPriceAluminium(): number {
    return 30 * this.getModelFence();
  }
  public getPriceSteel(): number {
    return 40 * this.getModelFence();
  }
  public getPriceChainLink(): number {
    return 25 * this.getModelFence();
  }

  private getModelFence(): number {
    let resp = 0;
    switch (this.modelFence) {
      case '1': resp = 5; break;
      case '2': resp = 10; break;
      case '3': resp = 15; break;
      case '4': resp = 20; break;
      case '5': resp = 25; break;
      default: this.openDialog('You must select a model fence'); break;
    }

    return resp;
  }

}


