import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.less'],
  standalone: true,
  imports: [FormsModule],
})
export class CalcInputComponent {
  /**
   *
   */
  @Input()
  count!: number;

  /**
   *
   */
  @Output()
  countChangeDecrease = new EventEmitter();

  /**
   *
   */
  @Output()
  countChangeIncrease = new EventEmitter();

  /**
   *
   */
  decrease() {
    this.countChangeDecrease.emit();
  }

  /**
   *
   */
  increase() {
    this.countChangeIncrease.emit();
  }
}
