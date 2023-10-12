import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SvgHideComponent } from 'src/app/shared/svg/svg-hide/svg-hide.component';
import { SvgShowComponent } from 'src/app/shared/svg/svg-show/svg-show.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [SvgShowComponent, SvgHideComponent, NgIf],
})
export class LoginComponent {
  show = false;

  showSecond = false;

  toggleShow() {
    this.show = !this.show;
  }

  toggleShowSecond() {
    this.showSecond = !this.showSecond;
  }
}
