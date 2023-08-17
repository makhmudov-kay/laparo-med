import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.less'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class SubscribeComponent implements OnInit {
  /**
   *
   */
  form!: UntypedFormGroup;

  /**
   *
   */
  recieveTheNews = false;

  /**
   *
   */
  privacyPolice = false;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder) {}

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
  }
}
