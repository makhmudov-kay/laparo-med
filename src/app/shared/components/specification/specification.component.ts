import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Specification } from './specification.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.less'],
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class SpecificationComponent {
  /**
   */
  @Input()
  specifications!: Specification;
}
