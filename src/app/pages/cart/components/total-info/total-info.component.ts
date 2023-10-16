import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Price } from 'src/app/shared/models/price.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.less'],
  standalone: true,
  imports: [MyCurrencyPipe, AsyncPipe],
})
export class TotalInfoComponent {
  private _totalPrice!: Price;
  public get totalPrice(): Price {
    return this._totalPrice;
  }
  @Input()
  public set totalPrice(v: Price) {
    this._totalPrice = v;
  }
}
