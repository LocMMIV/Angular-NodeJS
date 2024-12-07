import { Component } from '@angular/core';

@Component({
  selector: 'app-themsach',
  templateUrl: './themsach.component.html',
  styleUrl: './themsach.component.css'
})
export class ThemsachComponent {
  book = {
    bookName: '',
    category: '',
    image: null,
    quantity: null,
    description: ''
  };

  validateNumberInput(event: any): void {
    const value = event.target.value;
    // Loại bỏ mọi ký tự không phải là số
    event.target.value = value.replace(/[^0-9]/g, '');
  }
  

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.book.image = file;
    }
  }

  onSubmit(): void {
    console.log('Thông tin sách:', this.book);
    alert('Sách đã được thêm thành công!');
    // Xử lý logic thêm sách tại đây (ví dụ: gọi API)

    // Reset form
    this.book = {
      bookName: '',
      category: '',
      image: null,
      quantity: null,
      description: ''
    };
  }
}
