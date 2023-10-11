import { Component } from '@angular/core';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [ProductListComponent, TotalInfoComponent],
})
export class CartComponent {}
