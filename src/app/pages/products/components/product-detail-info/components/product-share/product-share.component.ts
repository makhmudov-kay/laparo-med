import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SvgFacebookComponent } from 'src/app/shared/svg/svg-facebook/svg-facebook.component';
import { SvgLinkComponent } from 'src/app/shared/svg/svg-link/svg-link.component';
import { SvgTweetComponent } from 'src/app/shared/svg/svg-tweet/svg-tweet.component';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
  styleUrls: ['./product-share.component.less'],
  standalone: true,
  imports: [
    SvgFacebookComponent,
    SvgTweetComponent,
    SvgLinkComponent,
    TranslateModule,
  ],
})
export class ProductShareComponent {}
