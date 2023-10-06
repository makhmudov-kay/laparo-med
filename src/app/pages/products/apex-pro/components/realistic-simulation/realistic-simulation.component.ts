import { Component, Input } from '@angular/core';
import { InformationIconsComponent } from './information-icons/information-icons.component';
import { DataInformation } from '../../apex-pro.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-realistic-simulation',
  templateUrl: './realistic-simulation.component.html',
  styleUrls: ['./realistic-simulation.component.less'],
  standalone: true,
  imports: [InformationIconsComponent, NgFor, NgClass],
})
export class RealisticSimulationComponent {
  /**
   *
   */
  @Input()
  data!: DataInformation;

  /**
   *
   */
  @Input()
  even!: boolean;
}
