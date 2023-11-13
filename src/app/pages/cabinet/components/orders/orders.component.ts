import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { OrderService } from 'src/app/pages/cart/services/order.service';
import { EmptyCardComponent } from 'src/app/pages/products/product-list/components/empty-card/empty-card.component';
import { ProductCardComponent } from 'src/app/pages/products/product-list/components/product-card/product-card.component';
import { OrderList } from 'src/app/shared/models/order.request';

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
    EmptyCardComponent
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
   *
   */
  constructor() {
    this.order$ = this.$order.getOrderList().pipe(map((result) => result));
  }
}
