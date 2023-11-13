import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { UserDetail } from 'src/app/pages/login/model/user.model';

@Injectable({ providedIn: 'root' })
export class UserDetailService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @returns
   */
  getUserInfo(): Observable<UserDetail> {
    return this.$base.get('account/user-detail/');
  }
}
