import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class TabContentComponent {
  @Input()
  data!: any;
}
