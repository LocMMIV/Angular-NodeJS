import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isLogoutModalVisible = false;

  openLogoutModal() {
    this.isLogoutModalVisible = true;
  }

  confirmLogout() {
    // Thực hiện đăng xuất
    console.log('Đã đăng xuất');
  }

  cancelLogout() {
    // Đóng modal
    this.isLogoutModalVisible = false;
  }
}

