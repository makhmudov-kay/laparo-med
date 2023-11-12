import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/pages/cart/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  standalone: true,
})
export class OrdersComponent {
  $order = inject(OrderService);
  order$!: Observable<any>;

  constructor() {
    this.$order.getOrderList().subscribe((res) => {
      console.log(res);
    });
  }
}
