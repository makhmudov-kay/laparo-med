import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(AuthService).isAuthintificate()
    ? true
    : createUrlTreeFromSnapshot(next, ['/', 'login']);
};
