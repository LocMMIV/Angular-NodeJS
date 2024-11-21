import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  data = [
    { id: 123456789011, name: 'Nguyễn Văn A', email: 'a.nguyen@example.com' },
    { id: 2, name: 'Trần Thị B', email: 'b.tran@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh Cwwwwwwwwwwwwwww', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 3, name: 'Lê Minh C', email: 'c.le@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com' },
    { id: 5, name: 'Hoàng Minh E', email: 'e.hoang@example.com' }
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
