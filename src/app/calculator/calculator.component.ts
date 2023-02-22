import { Component } from '@angular/core';

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


  public budget(): void {

    var priceMeter = 0;
    //Get price for Meter
    switch(this.typeFence){
      case '1': priceMeter = this.getPriceWood(); break;
      case '2': priceMeter = this.getPriceVinyl(); break;
      case '3': priceMeter = this.getPriceAluminium(); break;
      case '4': priceMeter = this.getPriceSteel(); break;
      case '5': priceMeter = this.getPriceChainLink(); break;
      default: alert('You must select a type fence first'); break;
    }

    //Calculate budge with the data
    var finalBudge = priceMeter * this.longFence;

    //Generate a printable format


  }

public getPriceWood(): number {
  return 0;
}
public getPriceVinyl(): number {
  return 0;
}
public getPriceAluminium(): number {
  return 0;
}
public getPriceSteel(): number {
  return 0;
}
public getPriceChainLink(): number {
  return 0;
}

}
