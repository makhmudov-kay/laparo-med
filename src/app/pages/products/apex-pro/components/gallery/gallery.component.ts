import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  standalone: true,
  imports: [TranslateModule],
})
export class GalleryComponent {}
