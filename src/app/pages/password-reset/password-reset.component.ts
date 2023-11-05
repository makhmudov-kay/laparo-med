import { takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { Constants } from 'src/app/core/configs/constants';
import { AuthService } from '../login/service/auth.service';
import { NgDestroy } from 'src/app/core/services/ng-destroy.service';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.less'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    RouterLink,
    TranslateModule,
  ],
  providers: [NgDestroy],
})
export class PasswordResetComponent implements OnInit {
  /**
   */
  form!: UntypedFormGroup;

  /**
   */
  phonePrefix = Constants.PHONE_PREFIX;

  /**
   */
  resetPasswordStep = 1;

  /**
   */
  token!: string;

  /**
   */
  isSuccess = false;

  /**
   */
  timer = 60;

  /**
   *
   * @param fb
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private $destroy: NgDestroy
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  initForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      secure_code: [''],
      password: ['', [Validators.minLength(8)]],
    });
  }

  /**
   *
   */
  startTimer() {
    let timerInterval = setInterval(() => {
      --this.timer;
      if (this.timer === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  /**
   *
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      return;
    }

    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;
    delete request.secure_code;
    delete request.password;

    this.$auth
      .resetPassword(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        console.log(res);
        if (res.detail) {
          this.resetPasswordStep = 2;
          this.startTimer();
        }
      });
  }

  /**
   *
   */
  confirmPassword() {
    if (!this.form.controls['secure_code'].value) {
      return;
    }

    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;
    delete request.password;

    this.$auth
      .confirmResetPassword(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        if (res.token) {
          this.form.reset();
          this.token = res.token;
          this.resetPasswordStep = 3;
        }
        console.log(res);
      });
  }

  /**
   *
   * @returns
   */
  createNewPassword() {
    if (this.form.controls['password'].invalid) {
      console.log(this.form.controls['password']);

      return;
    }

    const request = this.form.getRawValue();
    delete request.phone;
    delete request.secure_code;

    const [encoded_pk, token] = this.token.split('/');

    this.$auth
      .setNewPassword(encoded_pk, token, request)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.isSuccess = true;
        console.log(res);
      });
  }

  /**
   *
   */
  resendCode() {
    const request = {
      phone: '998' + this.form.controls['phone'].value,
    };
    this.$auth
      .resendCode(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.timer = 60;
        this.startTimer();
        console.log(res);
      });
  }
}
