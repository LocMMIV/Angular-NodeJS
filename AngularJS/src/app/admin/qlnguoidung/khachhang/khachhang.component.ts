import { Component } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent {
  data = [
    { id: '123456789012', name: 'Nguyễn Văn A', email: 'a.nguyen@gmail.com', phone: '0123456789', status: 'Khóa' },
    { id: '234567890123', name: 'Trần Thị B', email: 'b.tran@gmail.com', phone: '0123456790', status: 'Mở' },
    { id: '345678901234', name: 'Lê Minh C', email: 'c.le@gmail.com', phone: '0123456791', status: 'Mở' },
    { id: '456789012345', name: 'Phan Quốc D', email: 'd.phan@gmail.com', phone: '0123456792', status: 'Khóa' },
    { id: '567890123456', name: 'Vũ Lan E', email: 'e.vu@gmail.com', phone: '0123456793', status: 'Mở' },
    { id: '678901234567', name: 'Đỗ Thiên F', email: 'f.do@gmail.com', phone: '0123456794', status: 'Mở' },
    { id: '789012345678', name: 'Bùi Minh G', email: 'g.bui@gmail.com', phone: '0123456795', status: 'Khóa' },
    { id: '890123456789', name: 'Nguyễn Thị H', email: 'h.nguyen@gmail.com', phone: '0123456796', status: 'Mở' },
    { id: '901234567890', name: 'Trần Thành I', email: 'i.tran@gmail.com', phone: '0123456797', status: 'Khóa' },
    { id: '012345678901', name: 'Lê Thái J', email: 'j.le@gmail.com', phone: '0123456798', status: 'Mở' },
    { id: '123456789013', name: 'Phan Hữu K', email: 'k.phan@gmail.com', phone: '0123456799', status: 'Khóa' },
    { id: '234567890124', name: 'Vũ Mạnh L', email: 'l.vu@gmail.com', phone: '0123456800', status: 'Mở' },
    { id: '345678901235', name: 'Đỗ Phước M', email: 'm.do@gmail.com', phone: '0123456801', status: 'Mở' },
    { id: '456789012346', name: 'Bùi Hoàng N', email: 'n.bui@gmail.com', phone: '0123456802', status: 'Khóa' },
    { id: '567890123457', name: 'Nguyễn Thu O', email: 'o.nguyen@gmail.com', phone: '0123456803', status: 'Mở' },
    { id: '678901234568', name: 'Trần Quốc P', email: 'p.tran@gmail.com', phone: '0123456804', status: 'Khóa' },
    { id: '789012345679', name: 'Lê Khánh Q', email: 'q.le@gmail.com', phone: '0123456805', status: 'Mở' },
    { id: '890123456790', name: 'Phan Thi R', email: 'r.phan@gmail.com', phone: '0123456806', status: 'Khóa' },
    { id: '901234567901', name: 'Vũ Lan S', email: 's.vu@gmail.com', phone: '0123456807', status: 'Mở' },
    { id: '012345678902', name: 'Đỗ Mai T', email: 't.do@gmail.com', phone: '0123456808', status: 'Khóa' },
    { id: '123456789014', name: 'Bùi Mạnh U', email: 'u.bui@gmail.com', phone: '0123456809', status: 'Mở' },
    { id: '234567890125', name: 'Nguyễn Minh V', email: 'v.nguyen@gmail.com', phone: '0123456810', status: 'Mở' },
    { id: '345678901236', name: 'Trần Thị W', email: 'w.tran@gmail.com', phone: '0123456811', status: 'Khóa' },
    { id: '456789012347', name: 'Lê Thảo X', email: 'x.le@gmail.com', phone: '0123456812', status: 'Mở' },
    { id: '567890123458', name: 'Phan Tuấn Y', email: 'y.phan@gmail.com', phone: '0123456813', status: 'Khóa' },
    { id: '678901234579', name: 'Vũ Minh Z', email: 'z.vu@gmail.com', phone: '0123456814', status: 'Mở' },
    { id: '789012345690', name: 'Đỗ Thiên AA', email: 'aa.do@gmail.com', phone: '0123456815', status: 'Khóa' },
    { id: '890123456801', name: 'Bùi Quang AB', email: 'ab.bui@gmail.com', phone: '0123456816', status: 'Mở' },
    { id: '901234567912', name: 'Nguyễn Hữu AC', email: 'ac.nguyen@gmail.com', phone: '0123456817', status: 'Khóa' },
    { id: '012345678913', name: 'Trần Duy AD', email: 'ad.tran@gmail.com', phone: '0123456818', status: 'Mở' }
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

toggleLock(row: any): void {
  // Chuyển trạng thái giữa "Khóa" và "Đã khóa"
  if (row.status === 'Khóa') {
    row.status = 'Đã khóa';
  } else {
    row.status = 'Khóa';
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
