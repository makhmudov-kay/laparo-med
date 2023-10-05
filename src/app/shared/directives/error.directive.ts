import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appError]',
  standalone: true,
})
export class ErrorDirective implements AfterViewInit {
  /**
   *
   */
  constructor(private control: NgControl, private elementRef: ElementRef) {}

  /**
   *
   */
  ngAfterViewInit() {
    this.control.valueChanges?.subscribe((res) => {
      if (this.control.dirty) {
        const el = this.elementRef.nativeElement as HTMLElement;
        if (this.control.invalid) {
          el.classList.add('error');

          const span = document.createElement('span');
          let errorText = 'unknownError';
          if (this.control.hasError('required')) {
            errorText = 'requiredField';
          }
          span.textContent = errorText;
          // any other styling
          if (el.nextSibling) el.parentNode?.removeChild(el.nextSibling);
          el.parentNode?.insertBefore(span, el.nextSibling);
        } else {
          el.classList.remove('error');
          if (el.nextSibling) el.parentNode?.removeChild(el.nextSibling);
        }
      }
    });
  }
}
