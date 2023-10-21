import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SvgFacebookComponent } from 'src/app/shared/svg/svg-facebook/svg-facebook.component';
import { SvgLinkComponent } from 'src/app/shared/svg/svg-link/svg-link.component';
import { SvgTweetComponent } from 'src/app/shared/svg/svg-tweet/svg-tweet.component';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.less'],
  standalone: true,
  imports: [
    SvgFacebookComponent,
    SvgTweetComponent,
    SvgLinkComponent,
    NgClass,
    TranslateModule,
  ],
})
export class SocialLinksComponent {
  /**
   *
   */
  @Input()
  center = false;
}
