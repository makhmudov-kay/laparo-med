import { AsyncPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { OrderService } from 'src/app/pages/cart/services/order.service';
import { EmptyCardComponent } from 'src/app/pages/products/product-list/components/empty-card/empty-card.component';
import { ProductCardComponent } from 'src/app/pages/products/product-list/components/product-card/product-card.component';
import { OrderList } from 'src/app/shared/models/order.request';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgFor,
    DatePipe,
    ProductCardComponent,
    TranslateModule,
    EmptyCardComponent,
    ArrowBtnSVG,
    NgClass,
  ],
})
export class OrdersComponent {
  /**
   *
   */
  $order = inject(OrderService);

  /**
   *
   */
  order$!: Observable<OrderList[]>;

  /**
   */
  currentId!: number | null;

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {
    this.order$ = this.$order.getOrderList().pipe(map((result) => result));
  }

  /**
   *
   * @param index
   */
  openOrder(index: number) {
    if (this.currentId === index) {
      this.currentId = null;
      return
    }
    this.currentId = index;
    this.cd.markForCheck();
  }
}
