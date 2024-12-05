import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  adminName: string = 'Lê Tấn Lộc';
  isDropdownOpen = false; // Trạng thái mở/đóng menu
  isClicked = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminName = this.getAdminName();
  }
  logout() {
    console.log('okoko');
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
    // Toggle trạng thái menu
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleClick() {
    this.isClicked = !this.isClicked;
  }

  // Hàm giả lập để lấy tên của admin
  getAdminName(): string {
    return 'Lê Tấn Lộc';
  }
}
