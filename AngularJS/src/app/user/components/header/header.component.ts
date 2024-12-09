import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDropdownOpen: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isLogoutModalVisible = false;

  openLogoutModal() {
    this.isLogoutModalVisible = true;
  }

  logout() {
    console.log('okoko');
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }
}

