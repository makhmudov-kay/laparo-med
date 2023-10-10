import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';
import { ProductAdditionalComponent } from '../product-additional/product-additional.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { MyCurrencyPipe } from 'src/app/shared/pipes/my-currency.pipe';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
  standalone: true,
  imports: [
    ProductItemComponent,
    NgFor,
    ProductAdditionalComponent,
    ProductAdditionalComponent,
    ProductInfoComponent,
    MyCurrencyPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  /**
   *
   */
  mainProduct = {
    id: 100,
    name: 'Product Main',
    price: 999,
    image: 'https://via.placeholder.com/150',
  };

  /**
   *
   */
  modules = [
    {
      id: 1,
      type: 'Modules',
      isOpened: false,
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 100,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 200,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          name: 'Product 3',
          price: 300,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          name: 'Product 4',
          price: 400,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 5,
          name: 'Product 5',
          price: 500,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 6,
          name: 'Product 6',
          price: 600,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 7,
          name: 'Product 7',
          price: 700,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 8,
          name: 'Product 8',
          price: 800,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 9,
          name: 'Product 9',
          price: 900,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 10,
          name: 'Product 10',
          price: 1000,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      id: 2,
      type: 'Instruments',
      isOpened: false,
      products: [
        {
          id: 11,
          name: 'Product 1',
          price: 100,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 12,
          name: 'Product 2',
          price: 200,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 13,
          name: 'Product 3',
          price: 300,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 14,
          name: 'Product 4',
          price: 400,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 15,
          name: 'Product 5',
          price: 500,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 16,
          name: 'Product 6',
          price: 600,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 17,
          name: 'Product 7',
          price: 700,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 18,
          name: 'Product 8',
          price: 800,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 19,
          name: 'Product 9',
          price: 900,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 20,
          name: 'Product 10',
          price: 1000,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      id: 3,
      isOpened: false,
      type: 'Accessories',
      products: [
        {
          id: 21,
          name: 'Product 1',
          price: 100,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 22,
          name: 'Product 2',
          price: 200,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 23,
          name: 'Product 3',
          price: 300,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 24,
          name: 'Product 4',
          price: 400,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 25,
          name: 'Product 5',
          price: 500,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 26,
          name: 'Product 6',
          price: 600,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 27,
          name: 'Product 7',
          price: 700,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 28,
          name: 'Product 8',
          price: 800,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 29,
          name: 'Product 9',
          price: 900,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 30,
          name: 'Product 10',
          price: 1000,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
  ];

  /**
   *
   */
  totalPrice: number = this.mainProduct.price;

  /**
   *
   */
  list: any = [];
  cart: any = [];

  /**
   *
   * @param product
   */
  addOrDeleteProduct(product: any) {
    this.list.push(product);

    const result = Object.values(
      this.list.reduce(
        (acc: any, n: any) => (
          (!acc[n.id] || n.checked) && (acc[n.id] = n), acc
        ),
        {}
      )
    );

    this.totalPrice = result.reduce(
      (init: any, curr: any) => init + curr.totalPrice,
      0
    ) as number;

    const filteredList = result.filter((item: any) => item.count !== 0);
    this.cart = filteredList;
  }

  /**
   *
   */
  addToCart() {
    if (this.cart.length) {
      if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');
        const newCart = [...cart, ...this.cart];
        localStorage.setItem('cart', JSON.stringify(newCart));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    }
  }

  /**
   *
   * @param id
   */
  toggleCollapse(id: number) {
    this.modules = this.modules.map((item: any) => {
      if (item.id === id) {
        item.isOpened = !item.isOpened;
      } else {
        item.isOpened = false;
      }
      return item;
    });
  }
}
