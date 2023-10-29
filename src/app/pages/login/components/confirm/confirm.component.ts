import { NgIf } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormType } from '../auth/auth.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, TranslateModule],
})
export class ConfirmComponent {
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
  @Output()
  submit = new EventEmitter<string>();

  /**
   *
   */
  onSubmit() {
    this.submit.emit(this.formType);
  }
}
