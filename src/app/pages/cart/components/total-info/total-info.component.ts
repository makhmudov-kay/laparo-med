import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Price } from 'src/app/shared/models/price.model';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';
import { SvgSpinnerComponent } from 'src/app/shared/svg/svg-spinner/svg-spinner.component';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.less'],
  standalone: true,
  imports: [
    MyCurrencyPipe,
    AsyncPipe,
    TranslateModule,
    SvgSpinnerComponent,
    NgIf,
    NgClass,
  ],
})
export class TotalInfoComponent {
  /**
   */
  private _totalPrice!: Price;
  public get totalPrice(): Price {
    return this._totalPrice;
  }
  @Input()
  public set totalPrice(v: Price) {
    this._totalPrice = v;
  }

  /**
   */
  @Input()
  isLoading!: boolean;

  /**
   */
  @Output()
  sendOrder = new EventEmitter();

  /**
   *
   */
  sentOrder() {
    this.sendOrder.emit();
  }
}
