import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.less'],
  standalone: true,
  imports: [FormComponent, TranslateModule],
})
export class SendFormComponent {}
