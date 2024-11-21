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
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 1, name: 'Nguyễn Văn A', book: 'Lập trình C++', borrowDate: '01/11/2024', returnDate: '15/11/2024', overdue: 2, quantity: 1 },
    { id: 2, name: 'Trần Thị B', book: 'Java cơ bản', borrowDate: '02/11/2024', returnDate: '16/11/2024', overdue: 1, quantity: 2 },
    { id: 3, name: 'Lê Văn C', book: 'Python nâng cao', borrowDate: '03/11/2024', returnDate: '17/11/2024', overdue: 0, quantity: 1 },
    { id: 4, name: 'Phạm Thị D', book: 'SQL cơ bản', borrowDate: '04/11/2024', returnDate: '18/11/2024', overdue: 3, quantity: 1 },
    { id: 5, name: 'Hoàng Văn E', book: 'ReactJS toàn tập', borrowDate: '05/11/2024', returnDate: '19/11/2024', overdue: 0, quantity: 2 },
    { id: 6, name: 'Nguyễn Thị F', book: 'Angular thực chiến', borrowDate: '06/11/2024', returnDate: '20/11/2024', overdue: 4, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
    { id: 7, name: 'Trần Văn G', book: 'NodeJS cơ bản', borrowDate: '07/11/2024', returnDate: '21/11/2024', overdue: 5, quantity: 1 },
  ];

  searchTerm: string = ''; // Từ khóa tìm kiếm
  filteredData: any[] = []; // Dữ liệu đã lọc
  currentPage = 1;
  paginatedData: any[] = [];

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.filteredData = [...this.data]; // Gán dữ liệu ban đầu vào filteredData
    this.updateTable();
  }

  updateTable(): void {
    // Phân trang dựa trên filteredData thay vì data
    this.paginatedData = this.paginationService.paginate(this.filteredData, this.currentPage);
  }


  get visiblePages(): (number | string)[] {
    // Lấy danh sách các trang hiển thị
    return this.paginationService.getVisiblePages(this.currentPage, this.totalPages);
  }

  changePage(page: number | string): void {
    //Nếu trang quá nhiều thì sẽ hiện "..."
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateTable();
    }
  }
  filterBooks(): void {
    // Sử dụng SearchService để tìm kiếm
    this.filteredData = this.searchService.searchData(this.data, this.searchTerm);
    this.currentPage = 1; // Reset về trang đầu
    this.updateTable();
  }

  get totalPages(): number {
    // Tính tổng số trang dựa trên filteredData
    return this.paginationService.totalPages(this.filteredData);
  }
}
