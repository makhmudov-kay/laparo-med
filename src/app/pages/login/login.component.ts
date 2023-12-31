import { catchError } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [AuthComponent, ConfirmComponent, NgIf, TranslateModule],
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  loginFormGroup!: FormGroup;

  /**
   *
   */
  registrationFormGroup!: FormGroup;

  /**
   *
   */
  confirmFormGroup!: FormGroup;

  /**
   */
  confirm = false;

  /**
   */
  isSuccess = false;

  /**
   */
  loginValidator = false;

  /**
   */
  registerValidator = false;

  /**
   * 1 - неверный логин или пароль
   * 2 - номер телефона занят
   */
  errorType!: number;

  /**
   *
   * @param fb
   */
  constructor(
    private fb: FormBuilder,
    private auth$: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.loginFormInit();
    this.registrationFormInit();
    this.confimFormInit();
    this.valueChanges();
  }

  /**
   *
   */
  private valueChanges() {
    this.registrationFormGroup.controls['phone'].valueChanges.subscribe(() => {
      this.errorType = 0;
      this.cd.markForCheck();
    });
    this.loginFormGroup.controls['phone'].valueChanges.subscribe(() => {
      this.errorType = 0;
      this.cd.markForCheck();
    });
    this.loginFormGroup.controls['password'].valueChanges.subscribe(() => {
      this.errorType = 0;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private confimFormInit() {
    this.confirmFormGroup = this.fb.group({
      phone: [null, [Validators.required]],
      secure_code: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private registrationFormInit() {
    this.registrationFormGroup = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private loginFormInit() {
    this.loginFormGroup = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  /**
   *
   */
  submit(formType: string) {
    if (formType === 'register') {
      if (this.registrationFormGroup.invalid) {
        console.log('invalid form');
        this.registerValidator = true;
        return;
      }
      const request = this.registrationFormGroup.getRawValue();
      request.phone = '998' + request.phone;
      this.confirmFormGroup.controls['phone'].setValue(request.phone);

      this.auth$.registration(request).subscribe({
        next: (e: any) => {
          console.log(e);
          if (e.id) {
            this.confirm = true;
            this.registrationFormGroup.reset();
          }
        },
        error: (error) => {
          this.errorType = 2;
          this.cd.markForCheck();
        },
      });
    }

    if (formType === 'login') {
      if (this.loginFormGroup.invalid) {
        console.log('invalid form');
        this.loginValidator = true;
        return;
      }

      const request = this.loginFormGroup.getRawValue();
      request.phone = '998' + request.phone;
      this.auth$.auth(request).subscribe({
        next: (e) => {
          console.log(e);
          this.loginFormGroup.reset();
          if (e.access) {
            this.router.navigate(['../cabinet']);
          }
        },
        error: (err) => {
          console.log(err);
          if (err?.error.detail) {
            this.errorType = 1;
          }
          this.cd.markForCheck();
        },
      });
    }

    if (formType === 'confirm') {
      if (this.confirmFormGroup.invalid) {
        console.log('invalid form');
        return;
      }

      const request = this.confirmFormGroup.getRawValue();
      this.auth$.confirm(request).subscribe((e: any) => {
        if (e.detail === 'User activated') {
          console.log(e);
          this.isSuccess = true;
          this.confirm = false;
          this.confirmFormGroup.reset();
          // setTimeout(() => {
          //   this.isSuccess = false;
          // }, 5000);
        }
      });
    }
  }
}
