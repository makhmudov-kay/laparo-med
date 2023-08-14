import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { ArrowSVG } from 'src/app/shared/svg/arrow/arrow.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
  standalone: true,
  imports: [ArrowSVG, NgIf],
})
export class LanguageComponent {
  /**
   *
   */
  isVisibleLanguagePopup = false;

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
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isVisibleLanguagePopup = false;
    }
  }
}
