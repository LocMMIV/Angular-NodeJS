import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-themsach',
  templateUrl: './themsach.component.html',
  styleUrl: './themsach.component.css'
})
export class ThemsachComponent {
  @Output() closeForm = new EventEmitter<void>(); // Để đóng form
  @Output() bookAdded = new EventEmitter<any>(); // Để gửi dữ liệu sách mới

  newBook = {
    name: '',
    image: '',
    category: '',
    quantity: 1
  };

  // Hàm thêm sách
  addBook(): void {
    const newBookEntry = { ...this.newBook, id: Date.now() }; // Tạo ID tạm thời
    this.bookAdded.emit(newBookEntry); // Gửi sách mới ra ngoài
    this.closeForm.emit(); // Đóng form sau khi thêm
  }
}
