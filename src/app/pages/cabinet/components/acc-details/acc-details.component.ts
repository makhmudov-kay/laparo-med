import { Component, inject, OnInit } from '@angular/core';
import { UserDetailService } from './service/user-detail.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { UserDetail } from 'src/app/pages/login/model/user.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.less'],
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslateModule],
})
export class AccDetailsComponent implements OnInit {
  /**
   *
   */
  $userDetail = inject(UserDetailService);

  /**
   *
   */
  userDetail$!: Observable<UserDetail>;

  /**
   *
   */
  ngOnInit(): void {
    this.userDetail$ = this.$userDetail
      .getUserInfo()
      .pipe(map((result) => result));
  }
}
