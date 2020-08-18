import { Stock } from './stock.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  returnStockInfo(trigger: string)
  {
    return this.http.get('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ trigger);

  }

  calculateProfit(stock, marketPrice)
  {
    let price=stock.boughtPrice;
    let quantity=stock.quantity;
    let profit=marketPrice*quantity-price*quantity;
    return parseFloat(profit.toFixed(2));
  }

  calculateProfitPercent(stock, marketPrice)
  {
    let profit=this.calculateProfit(stock, marketPrice);
    return (profit/(stock.boughtPrice*stock.quantity)*100).toFixed(2);
  }
  constructor(private http: HttpClient) { }
}
