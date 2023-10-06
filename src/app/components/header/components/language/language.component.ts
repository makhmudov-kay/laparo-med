import { KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  Constants,
  CurrencyType,
  LanguageType,
} from 'src/app/core/configs/constants';
import { Settings } from 'src/app/core/helpers/settings';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
  standalone: true,
  imports: [ArrowSVG, NgIf, NgFor, KeyValuePipe, TranslateModule],
})
export class LanguageComponent {
  /**
   *
   */
  isVisibleLanguagePopup = false;

  /**
   *
   */
  readonly LANGUAGE = Constants.Language;
  readonly CURRENCY = Constants.CURRENCY;

  /**
   *
   */
  get currentLanguage() {
    return this.settings.language;
  }

  /**
   *
   */
  get currentCurrency() {
    return this.settings.currency;
  }

  /**
   *
   * @param el
   */
  constructor(
    private el: ElementRef,
    private translate: TranslateService,
    private settings: Settings
  ) {}

  /**
   *
   */
  toggleLangPopup() {
    this.isVisibleLanguagePopup = !this.isVisibleLanguagePopup;
  }

  /**
   *
   * @param e
   */
  onChangeLanguage(e: Event) {
    let { value } = e.target as HTMLSelectElement;
    this.settings.language = value as LanguageType;
    this.isVisibleLanguagePopup = false;
  }

  /**
   *
   * @param e
   */
  onChangeCurrency(e: Event) {
    let { value } = e.target as HTMLSelectElement;
    this.settings.currency = value as CurrencyType;
    this.isVisibleLanguagePopup = false;
  }

  /**
   *
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isVisibleLanguagePopup = false;
    }
  }
}
