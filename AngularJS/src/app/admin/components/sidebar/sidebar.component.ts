import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}
  logout() {
    console.log('okoko');
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }
}
