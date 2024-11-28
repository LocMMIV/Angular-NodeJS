import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  adminAvatar: string | null = null;
  adminName: string = 'Lê Tấn Lộc';
  isDropdownOpen = false; // Trạng thái mở/đóng menu

  constructor() { }

  ngOnInit(): void {
    // Lấy ảnh của admin từ một dịch vụ hoặc API
    this.adminAvatar = this.getAdminAvatar();
    this.adminName = this.getAdminName();
  }

  // Toggle trạng thái menu
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Hàm giả lập để lấy ảnh của admin (có thể thay thế bằng việc gọi API hoặc dịch vụ)
  getAdminAvatar(): string | null {
    return null; 
  }

  // Hàm giả lập để lấy tên của admin
  getAdminName(): string {
    return 'Lê Tấn Lộc';
  }
}
