import { StockService } from './../../stock.service';
import { Stock } from './../../stock.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks=[];
  constructor() {this.stocks=
    [
       {quantity:22, boughtPrice: 496.62, stockTrigger: 'indusindbk.ns'},
      {quantity:8, boughtPrice: 1005.29, stockTrigger: 'UBL.NS'},//
      {quantity:2, boughtPrice: 694.00, stockTrigger: 'BEML.NS'},
      {quantity:10, boughtPrice: 212.95, stockTrigger: 'MIDHANI.NS'},
      {quantity:1, boughtPrice: 2142.25, stockTrigger: 'reliance.ns'},
      {quantity:100, boughtPrice: 26.45, stockTrigger: 'YESBANK.NS'},
      {quantity:10, boughtPrice: 258.75, stockTrigger: 'INOXLEISUR.NS'},

    ]; }
    print(stock)
  {
    // console.log(stock);


  }


  ngOnInit(): void {
  }
}
