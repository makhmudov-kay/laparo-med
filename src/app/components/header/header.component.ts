import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { LanguageComponent } from './components/language/language.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { BurgerSVG } from 'src/app/shared/svg/burger/burger.component';
import { RouterLink } from '@angular/router';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [
    LanguageComponent,
    CartComponent,
    MenuComponent,
    BurgerSVG,
    NgClass,
    RouterLink,
    LogoComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /**
   *
   */
  isVisibleLanguagePopup = false;

  /**
   *
   */
  isVisibleCart = false;

  /**
   *
   */
  isDrawer = false;

  /**
   *
   * @param el
   */
  constructor(private el: ElementRef) {}

  /**
   *
   */
  toggleLangPopup() {
    this.isVisibleLanguagePopup = !this.isVisibleLanguagePopup;
  }

  /**
   *
   */
  toggleCartPopup() {
    this.isVisibleCart = !this.isVisibleCart;
  }

  /**
   *
   */
  openDrawer() {
    this.isDrawer = !this.isDrawer;
  }

  /**
   *
   */
  closeDrawer(e: boolean) {
    this.isDrawer = e;
  }

  /**
   *
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      if (this.isVisibleLanguagePopup) {
        this.isVisibleLanguagePopup = false;
      }
      if (this.isVisibleCart) {
        this.isVisibleCart = false;
      }
    }
  }
}
