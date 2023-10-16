import { Component, OnInit } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

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
      phone: [''],
      secure_code: [''],
    });
  }

  /**
   *
   */
  private registrationFormInit() {
    this.registrationFormGroup = this.fb.group({
      phone: [''],
      password: [''],
      first_name: [''],
      last_name: [''],
    });
  }

  /**
   *
   */
  private loginFormInit() {
    this.loginFormGroup = this.fb.group({
      phone: [''],
      password: [''],
    });
  }
}
