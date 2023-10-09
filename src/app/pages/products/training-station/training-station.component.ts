import { Component } from '@angular/core';
import { ProductDetailInfoComponent } from '../components/product-detail-info/product-detail-info.component';
import { ProductAspireComponent } from '../components/product-detail-info/components/product-aspire/product-aspire.component';
import { ProductDescriptionComponent } from '../components/product-detail-info/components/product-description/product-description.component';

@Component({
  selector: 'app-training-station',
  templateUrl: './training-station.component.html',
  styleUrls: ['./training-station.component.less'],
  standalone: true,
  imports: [
    ProductDetailInfoComponent,
    ProductAspireComponent,
    ProductDescriptionComponent,
  ],
})
export class TrainingStationComponent {}
