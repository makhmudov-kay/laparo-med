import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.less'],
  standalone: true,
  imports: [FormComponent, TranslateModule],
})
export class ContactsFormComponent {}
