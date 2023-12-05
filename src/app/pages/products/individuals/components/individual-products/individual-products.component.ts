import { NgxIntersectionComponent } from 'ngx-intersection2';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsInfoComponent } from 'src/app/shared/components/products-info/products-info.component';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';
import { TranslateModule } from '@ngx-translate/core';

export interface IndividualProductsData {
  title: string;
  description: string;
  listTitle?: string;
  list: string[];
  img: string;
  link: string;
  fade?: boolean;
}

@Component({
  selector: 'app-individual-products',
  templateUrl: './individual-products.component.html',
  styleUrls: ['./individual-products.component.less'],
  standalone: true,
  imports: [
    ArrowSVG,
    NgFor,
    NgIf,
    NgClass,
    ProductsInfoComponent,
    NgxIntersectionComponent,
    TranslateModule,
  ],
})
export class IndividualProductsComponent {
  products: IndividualProductsData[] = [
    {
      title: 'aspiriTitle',
      description: 'aspireDesc',
      listTitle: 'aspiriTitle',
      list: [
        'aspireList1',
        'aspireList2',
        'aspireList3',
        'aspireList4',
        'aspireList5',
        'aspireList6',
        'aspireList7',
        'aspireList8',
      ],
      img: './assets/image/individula-1.png',
      link: '../products/list?category_id=6',
    },
    {
      title: 'advanceTitle',
      description: 'advanceDesc',
      listTitle: 'advanceTitle',
      list: [
        'advanceList1',
        'advanceList2',
        'advanceList3',
        'advanceList4',
        'advanceList5',
        'advanceList6',
        'advanceList7',
        'advanceList8',
        'advanceList9',
        'advanceList10',
      ],
      img: './assets/image/individula-2.png',
      link: '../products/list?category_id=2',
    },
    {
      title: 'adeptTitle',
      description: 'adeptDesc',
      listTitle: 'adeptTitle',
      list: [
        'adeptList1',
        'adeptList2',
        'adeptList3',
        'adeptList4',
        'adeptList5',
        'adeptList6',
        'adeptList7',
        'adeptList8',
      ],
      img: './assets/image/individula-3.png',
      link: '../products/list?category_id=7',
    },
  ];

  handleIntersection(e: boolean, product: IndividualProductsData) {
    product.fade = e;
  }
}
