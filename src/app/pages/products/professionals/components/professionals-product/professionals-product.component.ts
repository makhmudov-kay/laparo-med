import { NgxIntersectionComponent } from 'ngx-intersection2';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsInfoComponent } from 'src/app/shared/components/products-info/products-info.component';
import { IndividualProductsData } from '../../../individuals/components/individual-products/individual-products.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-professionals-product',
  templateUrl: './professionals-product.component.html',
  styleUrls: ['./professionals-product.component.less'],
  standalone: true,
  imports: [
    ProductsInfoComponent,
    NgFor,
    NgIf,
    NgxIntersectionComponent,
    NgClass,
    TranslateModule,
  ],
})
export class ProfessionalsProductComponent {
  products: IndividualProductsData[] = [
    {
      title: 'individualProductTitle1',
      description: 'individualProductDesc1',

      list: [
        'dataInformations.list5',
        'dataInformations.list7',
        'dataInformations.list9',
        'analyticInfoBLock3',
        'dataInformations.list6',
        'individualProductList1',
        'individualProductList2',
        'dataInformations.list3',
      ],
      img: './assets/image/prof-product-0.jpg',
      link: '../products/apex-pro',
    },
    {
      title: 'individualProductTitle2',
      description: 'individualProductDesc2',

      list: [
        'networkingWorkText',
        'individualProductList3',
        'individualProductList4',
        'individualProductList5',
        'analyticInfoBLock1',
        'individualProductList6',
      ],
      img: './assets/image/prof-product-1.png',
      link: '../products/apex-vr',
    },
    {
      title: 'individualProductTitle3',
      description: 'individualProductDesc3',
      list: [
        'individualProductList7',
        'individualProductList8',
        'individualProductList9',
        'individualProductList10',
        'individualProductList11',
        'individualProductList12',
        'individualProductList13',
        'individualProductList14',
        'individualProductList15',
      ],
      img: './assets/image/prof-product-2.png',
      link: '../products/analytic',
    },
    {
      title: 'individualProductTitle4',
      description: 'individualProductDesc4',

      list: [
        'individualProductList16',
        'individualProductList17',
        'individualProductList18',
        'individualProductList19',
        'individualProductList20',
      ],
      img: './assets/image/prof-product-3.png',
      link: '../products/advance-training-station',
    },
    {
      title: 'individualProductTitle5',
      description: 'individualProductDesc5',

      list: [
        'individualProductList20',
        'individualProductList21',
        'aspireList8',
        'aspireList2',
        'individualProductList22',
        'individualProductList23',
        'individualProductList24',
        'aspireList3',
      ],
      img: './assets/image/prof-product-4.jpg',
      link: '../products/advance-portable',
    },
  ];

  handleIntersection(e: boolean, product: IndividualProductsData) {
    product.fade = e;
  }
}
