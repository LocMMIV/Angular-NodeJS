import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropdownOpen = false;
  // Hiển thị menu khi di chuột vào
  showDropdown() {
    this.isDropdownOpen = true;
  }

  // Ẩn menu khi di chuột ra
  hideDropdown() {
    this.isDropdownOpen = false;
  }
}
