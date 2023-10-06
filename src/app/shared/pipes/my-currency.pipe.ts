import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { Constants } from 'src/app/core/configs/constants';
import { Settings } from 'src/app/core/helpers/settings';

@Pipe({
  name: 'myCurrency',
  standalone: true,
  pure: false,
})
export class MyCurrencyPipe extends DecimalPipe implements PipeTransform {
  settings = inject(Settings);

  override transform(value: any): any {
    const number = super.transform(value);
    if (number) {
      // Replace ',' with ' '
      let separatedNumber = number.replace(new RegExp(',', 'g'), ' ');
      separatedNumber +=
        ' ' + Constants.CURRENCY[this.settings.currency].symbol;
      return separatedNumber;
    }
  }
}
