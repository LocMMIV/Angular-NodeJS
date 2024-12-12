import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chitietsach',
  templateUrl: './chitietsach.component.html',
  styleUrls: ['./chitietsach.component.css']
})
export class ChitietsachComponent {
  constructor(private router: Router) {}

  // Hàm chuyển đến trang mượn sách
  goToBorrowBook() {
    // Chuyển hướng đến trang mượn sách và truyền tham số book nếu cần thiết
    this.router.navigate(['/muonsach']);  // Giả sử bạn sử dụng id sách để truyền tham số
  }
}
