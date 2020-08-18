import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'src/app/stock.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Input() stockObj;
  stocks;
  constructor(public stockService: StockService) {


  }
  print(stock)
  {
   // console.log(stock);


  }

  ngOnInit(): void {
    //console.log(this.stockObj);
   setInterval( ()=>{this.stockService.returnStockInfo(this.stockObj.stockTrigger).subscribe(stock=>
    {
      this.stocks=stock;
      //console.log(stock);
    }
    );}
    , 1000)
  }

}
