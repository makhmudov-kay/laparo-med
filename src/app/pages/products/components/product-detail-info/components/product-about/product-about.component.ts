import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class ProductAboutComponent {
  @Input()
  data!: any;
}
