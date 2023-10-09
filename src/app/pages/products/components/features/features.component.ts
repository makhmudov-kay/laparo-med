import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less'],
  standalone: true,
  imports: [],
})
export class FeaturesComponent {
  @Input()
  data!: any;
}
