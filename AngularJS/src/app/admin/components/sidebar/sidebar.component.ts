import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  adminName: string = 'Lê Tấn Lộc';
  isDropdownOpen = false; // Trạng thái mở/đóng menu
  isClicked = false;

  constructor() { }

  ngOnInit(): void {
    this.adminName = this.getAdminName();
  }

  // Toggle trạng thái menu
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
