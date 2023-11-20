import { Component, Input } from '@angular/core';
import { ImageList } from '../../../apex-pro.component';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-information-icons',
  templateUrl: './information-icons.component.html',
  styleUrls: ['./information-icons.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class InformationIconsComponent {
  /**
   *
   */
  @Input()
  iconsData!: ImageList[];
}
