import { NgxIntersectionComponent } from 'ngx-intersection2';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkBtnComponent } from 'src/app/shared/components/link-btn/link-btn.component';
import { Blog } from '../../models/blog.model';
import { MyTranslatePipe } from 'src/app/shared/pipes/my-translate.pipe';
import { MyTranslateSyncPipe } from 'src/app/shared/pipes/my-translate-sync.pipe';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less'],
  standalone: true,
  imports: [
    NgClass,
    LinkBtnComponent,
    NgIf,
    DatePipe,
    MyTranslatePipe,
    AsyncPipe,
    NgxIntersectionComponent,
    MyTranslateSyncPipe
  ],
})
export class PostCardComponent {
  /**
   *
   */
  @Input()
  isFirst = false;

  /**
   *
   */
  @Input()
  isSmCard = false;

  /**
   *
   */
  @Input()
  withoutImg = false;

  /**
   *
   */
  @Input()
  data: Blog = {
    id: 0,
    created_at: new Date(),
    preview_image: './assets/image/blog-1.jpg',
    title: {
      ru: 'Esophageal Atresia – Physical Mo...',
      uz: 'Esophageal Atresia – Physical Mo...',
      en: 'Esophageal Atresia – Physical Mo...',
    },
    description: {
      ru: 'Esophageal Atresia – Physical Mo...',
      uz: 'Esophageal Atresia – Physical Mo...',
      en: 'Esophageal Atresia – Physical Mo...',
    },
  };

  fade = false;

  handleIntersection(e: boolean) {
    this.fade = e;
  }
}
