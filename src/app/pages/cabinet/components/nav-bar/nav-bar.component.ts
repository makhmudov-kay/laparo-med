import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/pages/login/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavBarComponent {
  constructor(private auth$: AuthService, private router: Router) {}

  logout() {
    this.auth$.logout();
    this.router.navigate(['../login']);
  }
}
