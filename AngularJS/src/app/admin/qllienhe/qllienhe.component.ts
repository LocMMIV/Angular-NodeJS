import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-qllienhe',
  templateUrl: './qllienhe.component.html',
  styleUrls: ['./qllienhe.component.css']
})

export class QllienheComponent implements OnInit {
  data = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a.nguyen@example.com', phone: '0123456789', content: 'Thắc mắc về sản phẩm', status: 'Chưa giải quyết' },
    { id: 2, name: 'Trần Thị B', email: 'b.tran@example.com', phone: '0987654321', content: 'Câu hỏi về chính sách vận chuyển', status: 'Giải quyết' },
    { id: 3, name: 'Lê Văn C', email: 'c.le@example.com', phone: '0912345678', content: 'Hỏi về thời gian giao hàng', status: 'Chưa giải quyết' },
    { id: 4, name: 'Phạm Thị D', email: 'd.pham@example.com', phone: '0983123456', content: 'Thắc mắc về hóa đơn', status: 'Giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
    { id: 5, name: 'Hoàng Văn E', email: 'e.hoang@example.com', phone: '0909876543', content: 'Khi nào có đợt giảm giá mới?', status: 'Chưa giải quyết' },
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
