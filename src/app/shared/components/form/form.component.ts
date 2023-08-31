import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  standalone: true,
  imports: [NgClass, NgIf],
})
export class FormComponent {
  @Input()
  isContact = false;
}
