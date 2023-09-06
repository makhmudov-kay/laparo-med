import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  standalone: true,
  imports: [RouterOutlet]
})
export class ProductsComponent {}
