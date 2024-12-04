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
  { id: '123456789012', name: 'Nguyễn Văn A', email: 'a@example.com', phone: '0123456789', content: 'Hỏi về dịch vụ', status: 'Chưa giải quyết' },
  { id: '234567890123', name: 'Trần Thị B', email: 'b@example.com', phone: '0123456790', content: 'Yêu cầu hỗ trợ kỹ thuật', status: 'Giải quyết' },
  { id: '345678901234', name: 'Lê Minh C', email: 'c@example.com', phone: '0123456791', content: 'Phản hồi về dịch vụ', status: 'Chưa giải quyết' },
  { id: '456789012345', name: 'Phan Quốc D', email: 'd@example.com', phone: '0123456792', content: 'Thắc mắc về thông tin', status: 'Giải quyết' },
  { id: '567890123456', name: 'Vũ Lan E', email: 'e@example.com', phone: '0123456793', content: 'Góp ý về giao diện web', status: 'Chưa giải quyết' },
  { id: '678901234567', name: 'Đỗ Thiên F', email: 'f@example.com', phone: '0123456794', content: 'Câu hỏi về dịch vụ', status: 'Giải quyết' },
  { id: '789012345678', name: 'Bùi Minh G', email: 'g@example.com', phone: '0123456795', content: 'Đặt câu hỏi về tính năng mới', status: 'Chưa giải quyết' },
  { id: '890123456789', name: 'Nguyễn Thị H', email: 'h@example.com', phone: '0123456796', content: 'Báo lỗi hệ thống', status: 'Giải quyết' },
  { id: '901234567890', name: 'Hoàng Quốc I', email: 'i@example.com', phone: '0123456797', content: 'Xin tư vấn thêm', status: 'Chưa giải quyết' },
  { id: '012345678901', name: 'Lê Thị J', email: 'j@example.com', phone: '0123456798', content: 'Yêu cầu hỗ trợ khẩn cấp', status: 'Giải quyết' },
  { id: '123456789123', name: 'Trần Quang K', email: 'k@example.com', phone: '0123456799', content: 'Câu hỏi về sản phẩm', status: 'Giải quyết' },
  { id: '234567890234', name: 'Vũ Quốc L', email: 'l@example.com', phone: '0123456800', content: 'Xin được liên hệ', status: 'Chưa giải quyết' },
  { id: '345678901345', name: 'Phan Thiên M', email: 'm@example.com', phone: '0123456801', content: 'Góp ý về giao diện', status: 'Giải quyết' },
  { id: '456789012456', name: 'Lê Quang N', email: 'n@example.com', phone: '0123456802', content: 'Phản hồi về tốc độ website', status: 'Chưa giải quyết' },
  { id: '567890123567', name: 'Nguyễn Minh O', email: 'o@example.com', phone: '0123456803', content: 'Thông tin về dịch vụ', status: 'Giải quyết' },
  { id: '678901234678', name: 'Bùi Quốc P', email: 'p@example.com', phone: '0123456804', content: 'Khiếu nại dịch vụ', status: 'Giải quyết' },
  { id: '789012345789', name: 'Trần Thị Q', email: 'q@example.com', phone: '0123456805', content: 'Lỗi đăng nhập', status: 'Chưa giải quyết' },
  { id: '890123456890', name: 'Lê Thị R', email: 'r@example.com', phone: '0123456806', content: 'Hỏi về tính năng', status: 'Giải quyết' },
  { id: '901234567901', name: 'Hoàng Thiên S', email: 's@example.com', phone: '0123456807', content: 'Báo lỗi trang', status: 'Chưa giải quyết' },
  { id: '012345678912', name: 'Bùi Quốc T', email: 't@example.com', phone: '0123456808', content: 'Khiếu nại giao diện', status: 'Giải quyết' },
  { id: '123456789234', name: 'Nguyễn Minh U', email: 'u@example.com', phone: '0123456809', content: 'Câu hỏi về dịch vụ', status: 'Giải quyết' },
  { id: '234567890345', name: 'Vũ Thiên V', email: 'v@example.com', phone: '0123456810', content: 'Xin thông tin thêm', status: 'Chưa giải quyết' },
  { id: '345678901456', name: 'Phan Quốc W', email: 'w@example.com', phone: '0123456811', content: 'Câu hỏi về tính năng mới', status: 'Giải quyết' },
  { id: '456789012567', name: 'Lê Quốc X', email: 'x@example.com', phone: '0123456812', content: 'Phản hồi dịch vụ', status: 'Chưa giải quyết' },
  { id: '567890123678', name: 'Nguyễn Minh Y', email: 'y@example.com', phone: '0123456813', content: 'Yêu cầu hỗ trợ', status: 'Giải quyết' },
  { id: '678901234789', name: 'Bùi Thị Z', email: 'z@example.com', phone: '0123456814', content: 'Thắc mắc về dịch vụ', status: 'Chưa giải quyết' },
  { id: '789012345890', name: 'Trần Thiên AA', email: 'aa@example.com', phone: '0123456815', content: 'Câu hỏi về tính năng', status: 'Giải quyết' },
  { id: '890123456901', name: 'Lê Quốc AB', email: 'ab@example.com', phone: '0123456816', content: 'Xin hỗ trợ kỹ thuật', status: 'Chưa giải quyết' },
  { id: '901234567012', name: 'Hoàng Thiên AC', email: 'ac@example.com', phone: '0123456817', content: 'Khiếu nại giao diện', status: 'Giải quyết' },
  { id: '012345678023', name: 'Bùi Quốc AD', email: 'ad@example.com', phone: '0123456818', content: 'Xin tư vấn', status: 'Chưa giải quyết' },
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

  confirmStatus(row: any): void {
    // Nếu trạng thái là "Giải quyết", chuyển thành "Chưa giải quyết", ngược lại sẽ chuyển thành "Giải quyết"
    if (row.status === 'Giải quyết') {
      row.status = 'Chưa giải quyết';
    } else {
      row.status = 'Giải quyết';
    }
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
