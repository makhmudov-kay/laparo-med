import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageModel } from '../models/language.model';
import { Settings } from 'src/app/core/helpers/settings';

@Pipe({
  name: 'myTranslate',
  standalone: true,
  pure: false,
})
export class MyTranslatePipe implements PipeTransform {
  settings = inject(Settings);

  transform(value: LanguageModel | string): string {
    return typeof value === 'string' ? value : value[this.settings.language];
  }
}
