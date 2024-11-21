import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent implements OnInit {
  data = [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Khoa học' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 4, name: 'Lịch sử' },
    { id: 5, name: 'Văn học' }
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
