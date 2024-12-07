import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  books = [
    { name: "Lịch sử Việt Nam", category: "Lịch sử", image: "icon.png" },
    { name: "Văn học cổ điển", category: "Văn học", image: "icon.png" },
    { name: "Khoa học vũ trụ", category: "Khoa học", image: "icon.png" }
  ];
  expiringBooks = [
    { id: '123456789012', name: 'Lịch sử Việt Nam', borrower: 'Nguyễn Văn A', dueDate: new Date('2024-12-05') },
  { id: '234567890123', name: 'Văn học cổ điển', borrower: 'Trần Thị B', dueDate: new Date('2024-12-10') },
  { id: '345678901234', name: 'Khoa học vũ trụ', borrower: 'Lê Minh C', dueDate: new Date('2024-12-15') },
  { id: '456789012345', name: 'Lịch sử thế giới', borrower: 'Phan Quốc D', dueDate: new Date('2024-12-18') },
  { id: '567890123456', name: 'Hóa học cơ bản', borrower: 'Vũ Lan E', dueDate: new Date('2024-12-20') },
  { id: '678901234567', name: 'Lịch sử chiến tranh', borrower: 'Đỗ Thiên F', dueDate: new Date('2024-12-22') },
  { id: '789012345678', name: 'Văn học hiện đại', borrower: 'Bùi Minh G', dueDate: new Date('2024-12-25') },
  { id: '890123456789', name: 'Kinh tế học cơ bản', borrower: 'Nguyễn Thị H', dueDate: new Date('2024-12-30') },
  { id: '901234567890', name: 'Lịch sử thế giới', borrower: 'Trần Quốc I', dueDate: new Date('2024-12-02') },
  { id: '012345678901', name: 'Tâm lý học', borrower: 'Lê Thị K', dueDate: new Date('2024-12-12') },
  { id: '123456789013', name: 'Toán học nâng cao', borrower: 'Vũ Minh L', dueDate: new Date('2024-12-17') },
  { id: '234567890124', name: 'Văn học thế giới', borrower: 'Nguyễn Thị M', dueDate: new Date('2024-12-19') },
  { id: '345678901235', name: 'Khoa học máy tính', borrower: 'Trần Minh N', dueDate: new Date('2024-12-23') },
  { id: '456789012346', name: 'Chính trị học', borrower: 'Bùi Thị O', dueDate: new Date('2024-12-26') },
  { id: '567890123457', name: 'Tâm lý học', borrower: 'Nguyễn Thi P', dueDate: new Date('2024-12-28') }
  ];

  currentPage = 1;
  paginatedData: any[] = [];

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(this.expiringBooks, this.currentPage);
  }

  get visiblePages(): (number | string)[] {
    return this.paginationService.getVisiblePages(this.currentPage, this.totalPages);
  }

  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  filterBooks(): void {
    // Lọc sách nếu cần
    this.currentPage = 1;
    this.updateTable();
  }

  get totalPages(): number {
    return this.paginationService.totalPages(this.expiringBooks);
  }

  // Kiểm tra nếu sách đã hết hạn hoặc chưa
isBookExpiring(book: any): string {
  const currentDate = new Date();
  const dueDate = new Date(book.dueDate); // Chuyển đổi ngày trả thành kiểu Date
  
  // Loại bỏ phần giờ phút giây của cả ngày hiện tại và ngày trả
  currentDate.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - currentDate.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  
  // Nếu sách hết hạn hoặc còn 1 ngày thì thông báo hết hạn
  if (diffDays <= 1 && diffDays >= 0) {
    return 'Hết hạn hoặc sắp hết hạn';
  } else if (diffDays < 0) {
    // Sách đã quá hạn
    return 'Sách đã quá hạn';
  } else {
    // Sách chưa đến hạn
    return `Chưa đến hạn (Còn ${diffDays} ngày)`;
  }
}

// Hàm nhắc nhở
sendReminder(book: any): void {
  const status = this.isBookExpiring(book);
  if (status === 'Hết hạn hoặc sắp hết hạn' || status === 'Sách đã quá hạn') {
    alert(`Nhắc nhở sách:\n${book.name}\nNgười mượn: ${book.borrower}\nHạn trả: ${book.dueDate.toLocaleDateString()} - ${status}`);
  } else {
    alert(`Nhắc nhở sách:\n${book.name}\nNgười mượn: ${book.borrower}\nHạn trả: ${book.dueDate.toLocaleDateString()} - ${status}`);
  }
}
}


