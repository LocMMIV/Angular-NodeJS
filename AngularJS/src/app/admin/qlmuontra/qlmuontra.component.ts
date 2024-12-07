import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-qlmuontra',
  templateUrl: './qlmuontra.component.html',
  styleUrls: ['./qlmuontra.component.css'],
})

export class QlmuontraComponent implements OnInit {
  data = [
    { id: '123456789012', name: 'Nguyễn Văn A', book: 'Lịch sử Việt Nam', borrowDate: '01/11/2024', returnDate: '15/11/2024', quantity: 1 },
    { id: '234567890123', name: 'Trần Thị B', book: 'Văn học cổ điển', borrowDate: '05/11/2024', returnDate: '20/11/2024', quantity: 2 },
    { id: '345678901234', name: 'Lê Minh C', book: 'Khoa học vũ trụ', borrowDate: '10/11/2024', returnDate: '20/11/2024', quantity: 1 },
    { id: '456789012345', name: 'Phan Quốc D', book: 'Lịch sử thế giới', borrowDate: '15/11/2024', returnDate: '30/11/2024', quantity: 3 },
    { id: '567890123456', name: 'Vũ Lan E', book: 'Hóa học cơ bản', borrowDate: '20/11/2024', returnDate: '04/12/2024', quantity: 1 },
    { id: '678901234567', name: 'Đỗ Thiên F', book: 'Lịch sử chiến tranh', borrowDate: '25/11/2024', returnDate: '05/12/2024', quantity: 2 },
    { id: '789012345678', name: 'Bùi Minh G', book: 'Văn học hiện đại', borrowDate: '28/11/2024', returnDate: '10/12/2024', quantity: 1 },
    { id: '890123456789', name: 'Ngô Thanh H', book: 'Lịch sử Trung Quốc', borrowDate: '01/12/2024', returnDate: '10/12/2024', quantity: 1 },
    { id: '901234567890', name: 'Lê Tâm I', book: 'Kinh tế học', borrowDate: '03/12/2024', returnDate: '13/12/2024', quantity: 1 },
    { id: '012345678901', name: 'Trương Ngọc J', book: 'Vật lý cơ bản', borrowDate: '05/12/2024', returnDate: '15/12/2024', quantity: 1 },
    { id: '112233445566', name: 'Nguyễn Minh K', book: 'Hóa học hữu cơ', borrowDate: '07/12/2024', returnDate: '17/12/2024', quantity: 2 },
    { id: '223344556677', name: 'Phan Quỳnh L', book: 'Công nghệ thông tin', borrowDate: '10/12/2024', returnDate: '20/12/2024', quantity: 1 },
    { id: '334455667788', name: 'Trần Hải M', book: 'Giải tích', borrowDate: '12/12/2024', returnDate: '22/12/2024', quantity: 1 },
    { id: '445566778899', name: 'Vũ Minh N', book: 'Sử học cổ đại', borrowDate: '15/12/2024', returnDate: '25/12/2024', quantity: 3 },
    { id: '556677889900', name: 'Bùi Tấn O', book: 'Văn học Trung Quốc', borrowDate: '16/12/2024', returnDate: '26/12/2024', quantity: 2 },
    { id: '667788990011', name: 'Đỗ Tuấn P', book: 'Pháp luật', borrowDate: '18/12/2024', returnDate: '28/12/2024', quantity: 1 },
    { id: '778899001122', name: 'Nguyễn Minh Q', book: 'Hệ thống thông tin', borrowDate: '20/12/2024', returnDate: '30/12/2024', quantity: 2 },
    { id: '889900112233', name: 'Trần Phúc R', book: 'Lý thuyết đồ thị', borrowDate: '22/12/2024', returnDate: '31/12/2024', quantity: 1 },
    { id: '990011223344', name: 'Lê Phước S', book: 'Xã hội học', borrowDate: '23/12/2024', returnDate: '02/01/2025', quantity: 3 },
    { id: '101112233455', name: 'Bùi Minh T', book: 'Tâm lý học', borrowDate: '24/12/2024', returnDate: '03/01/2025', quantity: 1 },
    { id: '212223344566', name: 'Nguyễn Lan U', book: 'Toán học nâng cao', borrowDate: '25/12/2024', returnDate: '04/01/2025', quantity: 2 },
    { id: '323334455677', name: 'Trần Thiên V', book: 'Kinh doanh quốc tế', borrowDate: '26/12/2024', returnDate: '05/01/2025', quantity: 1 },
    { id: '434445566788', name: 'Lê Mạnh W', book: 'Tài chính kế toán', borrowDate: '28/12/2024', returnDate: '07/01/2025', quantity: 1 },
    { id: '545556677899', name: 'Vũ Quang X', book: 'Phần mềm máy tính', borrowDate: '29/12/2024', returnDate: '08/01/2025', quantity: 1 },
    { id: '656667788900', name: 'Bùi Thị Y', book: 'Văn học Anh', borrowDate: '30/12/2024', returnDate: '09/01/2025', quantity: 2 },
    { id: '767778899011', name: 'Nguyễn Xuân Z', book: 'Địa lý học', borrowDate: '01/12/2024', returnDate: '15/12/2024', quantity: 1 },
    { id: '878889900122', name: 'Lê Vinh A1', book: 'Quản trị kinh doanh', borrowDate: '02/12/2024', returnDate: '12/12/2024', quantity: 1 },
    { id: '989990011233', name: 'Trần Quý B2', book: 'Đại số tuyến tính', borrowDate: '03/12/2024', returnDate: '13/12/2024', quantity: 3 },
    { id: '100110112344', name: 'Phan Minh C3', book: 'Quản lý dự án', borrowDate: '04/12/2024', returnDate: '14/12/2024', quantity: 1 }
  ];

  searchTerm: string = ''; // Từ khóa tìm kiếm
  filteredData: any[] = []; // Dữ liệu đã lọc
  currentPage = 1; // Trang hiện tại
  paginatedData: any[] = []; // Dữ liệu phân trang

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Gán dữ liệu ban đầu vào filteredData
    this.filteredData = [...this.data];
    this.updateTable();
  }

  // Hàm tính toán "quá hạn"
  isOverdue(returnDate: string): string {
    const currentDate = new Date(); // Ngày hiện tại
    const returnDateParts = returnDate.split('/'); // Tách ngày, tháng, năm
    const returnDateObj = new Date(
      Number(returnDateParts[2]), 
      Number(returnDateParts[1]) - 1, 
      Number(returnDateParts[0])
    );

    // Kiểm tra nếu ngày trả sách đã qua ngày hiện tại
    if (currentDate > returnDateObj) {
      const overdueDays = Math.floor((currentDate.getTime() - returnDateObj.getTime()) / (1000 * 3600 * 24));
      return `${overdueDays} ngày`;
    }
    return 'Không';
  }

  // Hàm này sẽ được gọi trong template để cập nhật "quá hạn"
  getOverdueStatus(row: any): string {
    return this.isOverdue(row.returnDate);
  }

  // Cập nhật bảng dữ liệu
  updateTable(): void {
    this.paginatedData = this.paginationService.paginate(this.filteredData, this.currentPage);
  }

  // Lọc sách theo từ khóa tìm kiếm
  filterBooks(): void {
    this.filteredData = this.searchService.searchData(this.data, this.searchTerm);
    this.currentPage = 1;
    this.updateTable();
  }

  // Lấy danh sách các trang hiển thị
  get visiblePages(): (number | string)[] {
    return this.paginationService.getVisiblePages(this.currentPage, this.totalPages);
  }

  // Chuyển trang
  changePage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }

  // Tính tổng số trang dựa trên filteredData
  get totalPages(): number {
    return this.paginationService.totalPages(this.filteredData);
  }
}
