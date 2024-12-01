import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'trangchu-root',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  books = [
    {
      title: 'Bệnh nhân bí ẩn',
      description: 'Truyện kinh dị',
      image: 'icon.png'
    },
    {
      title: 'Chuyến tàu kinh hoàng',
      description: 'Truyện Kinh Dị',
      image: 'icon.png'
    },
    {
      title: 'Akacua',
      description: 'League of Legends',
      image: 'icon.png'
    },
    {
      title: 'Akacua',
      description: 'League of Legends',
      image: 'icon.png'
    },
    {
      title: 'Akacua',
      description: 'League of Legends',
      image: 'icon.png'
    },
    {
      title: 'Akacua',
      description: 'League of Legends',
      image: 'icon.png'
    },
    {
      title: 'Akacua',
      description: 'League of Legends',
      image: 'icon.png'
    },
    {
      title: 'Vũ khí tối thượng',
      description: 'Tối thượng',
      image: 'icon.png'
    }
  ];

  // Inject Router service
  constructor(private router: Router) {}

  // Hàm chuyển hướng khi nhấn nút
  goToCategory() {
    this.router.navigate(['/theloai']); // Chuyển đến trang thể loại
  }
}
