import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageModel } from 'src/app/shared/models/language.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.less'],
  standalone: true,
  imports: [MyTranslatePipe, AsyncPipe]
})
export class ProductInfoComponent {
  /**
   * 
   */
  @Input()
  info!: LanguageModel;
}
