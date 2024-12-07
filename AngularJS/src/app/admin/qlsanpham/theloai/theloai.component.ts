import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent implements OnInit {
  data = [
    { id: 'F', name: 'Fiction' },
    { id: 'GD', name: 'Giáo dục' },
    { id: 'HD', name: 'Hành động' },
    { id: 'HS', name: 'Hình sự' },
    { id: 'KH', name: 'Khoa học' },
    { id: 'KNS', name: 'Kỹ năng sống' },
    { id: 'KD', name: 'Kinh dị' },
    { id: 'KT', name: 'Kinh tế' },
    { id: 'LM', name: 'Lãng mạn' },
    { id: 'LS', name: 'Lịch sử' },
    { id: 'NF', name: 'Non-Fiction' },
    { id: 'TT', name: 'Tiểu thuyết' },
    { id: 'TLH', name: 'Tâm lý học' },
    { id: 'VH', name: 'Văn học' },
    { id: 'CT', name: 'Chính trị' }
  ];
  
  searchTerm: string = ''; // Từ khóa tìm kiếm
  filteredData: any[] = []; // Dữ liệu đã lọc
  currentPage = 1;
  paginatedData: any[] = [];

  constructor(
    private paginationService: PaginationService,
    private searchService: SearchService,
    private router: Router
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

  // Phương thức chuyển hướng đến trang thêm sách
  navigateToAddCategory(): void {
    this.router.navigate(['/themtheloai']);
  }
}
