import { Component, OnInit } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [AuthComponent],
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
   *
   * @param fb
   */
  constructor(private fb: FormBuilder, private auth$: AuthService) {}

  /**
   *
   */
  ngOnInit() {
    this.loginFormInit();
    this.registrationFormInit();
    this.confimFormInit();
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
      password: [null, [Validators.required]],
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
      password: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  submit(formType: string) {
    if (formType === 'register') {
      if (this.registrationFormGroup.invalid) {
        console.log('invalid form');
        return;
      }

      const request = this.registrationFormGroup.getRawValue();

      this.auth$.registration(request).subscribe((e) => {
        console.log(e);
        this.registrationFormGroup.reset();
      });
    }

    if (formType === 'login') {
      if (this.loginFormGroup.invalid) {
        console.log('invalid form');
        return;
      }

      const request = this.loginFormGroup.getRawValue();

      this.auth$.auth(request).subscribe((e) => {
        console.log(e);
        this.loginFormGroup.reset();
      });
    }
  }
}
