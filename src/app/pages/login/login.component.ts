import { Component } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  standalone: true,
  imports: [AuthComponent],
})
export class LoginComponent {}
