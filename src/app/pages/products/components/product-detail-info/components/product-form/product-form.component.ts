import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less'],
  standalone: true,
  imports: [FormComponent, TranslateModule],
})
export class ProductFormComponent {}
