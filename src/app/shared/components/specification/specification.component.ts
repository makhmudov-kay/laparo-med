import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Specification } from './specification.model';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.less'],
  standalone: true,
  imports: [NgFor],
})
export class SpecificationComponent {
  /**
   */
  @Input()
  specifications!: Specification;
}
