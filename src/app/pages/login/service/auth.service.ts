import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Registration } from '../model/registration.request';
import { Login } from '../model/login.request';
import { ConfirmUser } from '../model/comfirm.request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   *
   * @param $base
   */
  constructor(private $base: BaseService) {}

  /**
   *
   * @param user
   * @returns
   */
  registration(user: Registration) {
    return this.$base.post('account/register/', user);
  }

  /**
   *
   * @param user
   * @returns
   */
  auth(user: Login) {
    return this.$base.post('account/login/', user);
  }

  /**
   *
   * @param user
   * @returns
   */
  confirm(user: ConfirmUser) {
    return this.$base.post('account/confirm/', user);
  }
}
