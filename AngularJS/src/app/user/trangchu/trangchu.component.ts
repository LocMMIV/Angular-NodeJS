import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'trangchu-root',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  books = [
    { title: 'Dế Mèn Phiêu Lưu Ký', description: 'Văn học', image: 'icon.png' },
    { title: 'Những Người Khốn Khổ', description: 'Tiểu thuyế', image: 'icon.png' },
    { title: 'The Catcher in the Rye', description: 'Văn học', image: 'icon.png' },
    { title: 'Harry Potter và Hòn Đá Phù Thủy', description: 'Văn học', image: 'icon.png' },
    { title: 'Mắt Biếc', description: 'Lãng mạn', image: 'icon.png' },
    { title: 'The Great Gatsby', description: 'Tiểu thuyết', image: 'icon.png' },
    { title: 'Cô Gái Đến Từ Hôm Qua', description: 'Văn học', image: 'icon.png' },
    { title: 'Pride and Prejudice', description: 'Lãng mạn', image: 'icon.png' }
  ];

  // Inject Router service
  constructor(private router: Router) {}

  // Hàm chuyển hướng khi nhấn nút
  goToCategory() {
    this.router.navigate(['/theloai']); // Chuyển đến trang thể loại
  }
}
