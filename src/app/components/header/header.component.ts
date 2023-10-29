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
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { SvgUserComponent } from 'src/app/shared/svg/svg-user/svg-user.component';
import { AuthService } from 'src/app/pages/login/service/auth.service';

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
    SvgUserComponent,
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
  constructor(
    private el: ElementRef,
    private auth$: AuthService,
    private router: Router
  ) {}

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

  navigate() {
    if (this.auth$.isAuthintificate()) {
      this.router.navigate(['../cabinet']);
    } else {
      this.router.navigate(['../login']);
    }
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
