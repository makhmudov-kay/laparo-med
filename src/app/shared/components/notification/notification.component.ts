import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { SvgCheckComponent } from '../../svg/svg-check/svg-check.component';
import { NgClass, NgIf } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less'],
  standalone: true,
  imports: [SvgCheckComponent, NgIf, RouterLink, NgClass, TranslateModule],
  animations: [
    trigger('fadeIn', [
      transition(
        ':enter',
        useAnimation(fadeInRight, {
          params: { timing: 0.5 },
        })
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  private _isNotification!: boolean;
  public get isNotification(): boolean {
    return this._isNotification;
  }
  @Input()
  public set isNotification(v: boolean) {
    this._isNotification = v;
    this.cd.markForCheck();
  }

  @Output()
  isNotificationChange = new EventEmitter<boolean>();

  @Input()
  text!: string;

  @Input()
  visibleBtn!: boolean;

  cd = inject(ChangeDetectorRef);
}
