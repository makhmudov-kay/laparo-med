import { Component } from '@angular/core';
import { FormComponent } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.less'],
  standalone: true,
  imports: [FormComponent],
})
export class SendFormComponent {}
