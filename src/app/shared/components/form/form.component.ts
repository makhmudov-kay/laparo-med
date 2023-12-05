import { NgClass, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ContactService } from './services/contact.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorDirective } from '../../directives/error.directive';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    ReactiveFormsModule,
    ErrorDirective,
    NgxMaskDirective,
    TranslateModule,
    NotificationComponent,
  ],
  providers: [provideNgxMask()],
})
export class FormComponent {
  @Input()
  isContact = false;

  $contact = inject(ContactService);

  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    // email: [''],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  PHONE_MASK = '(00) 000-00-00';
  PHONE_PREFIX = '+998 ';

  /**
   */
  visibleMessage = false;

  sendContact() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key as keyof typeof this.form.controls].markAsDirty();
      this.form.controls[
        key as keyof typeof this.form.controls
      ].updateValueAndValidity({ onlySelf: true });
    });

    if (this.form.invalid) {
      return;
    }

    const request = this.form.getRawValue();
    request.phone = '998' + request.phone;

    this.$contact.sendContact(request).subscribe((res) => {
      // alert('Message sent successfully');
      this.visibleMessage = true;
      this.form.reset();
    });
  }
}
