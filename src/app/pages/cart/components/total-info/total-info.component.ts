import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.less'],
  standalone: true,
})
export class TotalInfoComponent {
  private _totalPrice!: number;
  public get totalPrice(): number {
    return this._totalPrice;
  }
  @Input()
  public set totalPrice(v: number) {
    this._totalPrice = v;
  }
}
