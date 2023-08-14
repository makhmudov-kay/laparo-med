import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { CartSVG } from 'src/app/shared/svg/cart/cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  standalone: true,
  imports: [CartSVG, NgIf],
})
export class CartComponent {
  /**
   *
   */
  isVisibleCart = false;

  /**
   *
   * @param el
   */
  constructor(private el: ElementRef) {}

  /**
   *
   */
  toggleCartPopup() {
    this.isVisibleCart = !this.isVisibleCart;
  }

  /**
   *
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isVisibleCart = false;
    }
  }
}
