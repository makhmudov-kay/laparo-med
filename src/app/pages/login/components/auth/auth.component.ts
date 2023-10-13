import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgHideComponent } from 'src/app/shared/svg/svg-hide/svg-hide.component';
import { SvgShowComponent } from 'src/app/shared/svg/svg-show/svg-show.component';
type FormType = 'login' | 'register';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  standalone: true,
  imports: [SvgShowComponent, SvgHideComponent, NgIf],
})
export class AuthComponent {
  /**
   * 
   */
  @Input()
  formType: FormType = 'login';
  
  /**
   *
   */
  show = false;

  /**
   *
   */
  toggleShow() {
    this.show = !this.show;
  }
}
