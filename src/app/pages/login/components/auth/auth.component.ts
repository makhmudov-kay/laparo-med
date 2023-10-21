import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SvgHideComponent } from 'src/app/shared/svg/svg-hide/svg-hide.component';
import { SvgShowComponent } from 'src/app/shared/svg/svg-show/svg-show.component';
type FormType = 'login' | 'register';
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
  ],
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
   *
   */
  @Input()
  form!: FormGroup;

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

  onSubmit() {
    console.log(this.form.value);
  }
}
