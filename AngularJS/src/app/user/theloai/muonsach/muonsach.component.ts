import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-muonsach',
  templateUrl: './muonsach.component.html',
  styleUrls: ['./muonsach.component.css']
})
export class MuonsachComponent {
  @Input() book: any; // Nhận thông tin sách từ component cha
  @Output() close = new EventEmitter<void>(); // Sự kiện đóng giao diện
  @Output() confirm = new EventEmitter<any>(); // Sự kiện xác nhận mượn

  onConfirm() {
    this.confirm.emit(this.book);
  }

  onClose() {
    this.close.emit();
  }
}
