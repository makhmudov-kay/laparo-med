import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Constants } from 'src/app/core/configs/constants';
import { SvgHideComponent } from 'src/app/shared/svg/svg-hide/svg-hide.component';
import { SvgShowComponent } from 'src/app/shared/svg/svg-show/svg-show.component';
export type FormType = 'login' | 'register' | 'confirm';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  standalone: true,
  imports: [
    SvgShowComponent,
    SvgHideComponent,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskDirective,
    RouterLink,
  ],
  providers: [provideNgxMask()],
})
export class AuthComponent {
  /**
   *
   */
  private _formType!: FormType;
  public get formType(): FormType {
    return this._formType;
  }
  @Input()
  public set formType(v: FormType) {
    this._formType = v;
  }

  /**
   */
  @Input()
  validator!: boolean;

  /**
   */
  PHONE_PREFIX = Constants.PHONE_PREFIX;

  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Output()
  submit = new EventEmitter<string>();

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

  /**
   *
   */
  onSubmit() {
    this.submit.emit(this.formType);
  }
}
