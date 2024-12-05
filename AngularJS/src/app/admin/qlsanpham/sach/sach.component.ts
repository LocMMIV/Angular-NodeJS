import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../../../services/pagination.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.css']
})
export class SachComponent implements OnInit {
  data = [
    { id: 1, name: 'Đoạt Hồn', image: 'icon.png', category: 'Văn học', quantity: 10, status: 'Hiển thị' },
    { id: 2, name: 'Lão Hạc', image: 'icon.png', category: 'Văn học', quantity: 5, status: 'Hiển thị' },
    { id: 3, name: 'Tắt Đèn', image: 'icon.png', category: 'Văn học', quantity: 8, status: 'Không hiển thị' },
    { id: 4, name: 'Chí Phèo', image: 'icon.png', category: 'Văn học', quantity: 12, status: 'Hiển thị' },
    { id: 5, name: 'Cô Gái Đến Từ Hôm Qua', image: 'icon.png', category: 'Văn học', quantity: 7, status: 'Không hiển thị' },
    { id: 6, name: 'Nhà Giả Kim', image: 'icon.png', category: 'Kinh tế', quantity: 10, status: 'Hiển thị' },
    { id: 7, name: 'Khởi Nghiệp Cùng Công Nghệ', image: 'icon.png', category: 'Kinh tế', quantity: 3, status: 'Không hiển thị' },
    { id: 8, name: 'Dạy Con Làm Giàu', image: 'icon.png', category: 'Kinh tế', quantity: 15, status: 'Hiển thị' },
    { id: 9, name: 'Kỹ Năng Thương Lượng', image: 'icon.png', category: 'Kinh tế', quantity: 10, status: 'Hiển thị' },
    { id: 10, name: 'Quản Trị Kinh Doanh Hiện Đại', image: 'icon.png', category: 'Kinh tế', quantity: 5, status: 'Không hiển thị' },
    { id: 11, name: 'Tìm Lại Chính Mình', image: 'icon.png', category: 'Tâm lý học', quantity: 8, status: 'Hiển thị' },
    { id: 12, name: 'Sức Mạnh Của Tư Duy Tích Cực', image: 'icon.png', category: 'Tâm lý học', quantity: 20, status: 'Hiển thị' },
    { id: 13, name: 'Tâm Lý Học Tuổi Dậy Thì', image: 'icon.png', category: 'Tâm lý học', quantity: 12, status: 'Không hiển thị' },
    { id: 14, name: 'Sức Khỏe Tinh Thần', image: 'icon.png', category: 'Tâm lý học', quantity: 9, status: 'Hiển thị' },
    { id: 15, name: 'Khám Phá Bản Thân', image: 'icon.png', category: 'Tâm lý học', quantity: 18, status: 'Hiển thị' },
    { id: 16, name: 'Truyện Kiều', image: 'icon.png', category: 'Lịch sử', quantity: 25, status: 'Hiển thị' },
    { id: 17, name: 'Lịch Sử Việt Nam', image: 'icon.png', category: 'Lịch sử', quantity: 10, status: 'Hiển thị' },
    { id: 18, name: 'Người Lính Cộng Hòa', image: 'icon.png', category: 'Lịch sử', quantity: 7, status: 'Không hiển thị' },
    { id: 19, name: 'Những Địa Danh Lịch Sử', image: 'icon.png', category: 'Lịch sử', quantity: 5, status: 'Hiển thị' },
    { id: 20, name: 'Bình Ngô Đại Cáo', image: 'icon.png', category: 'Lịch sử', quantity: 3, status: 'Không hiển thị' },
    { id: 21, name: 'Cảm Hứng Từ Cuộc Sống', image: 'icon.png', category: 'Giáo dục', quantity: 15, status: 'Hiển thị' },
    { id: 22, name: 'Bí Quyết Học Giỏi', image: 'icon.png', category: 'Giáo dục', quantity: 10, status: 'Hiển thị' },
    { id: 23, name: 'Học Tốt Tiếng Anh', image: 'icon.png', category: 'Giáo dục', quantity: 20, status: 'Hiển thị' },
    { id: 24, name: 'Nâng Cao Kỹ Năng Quản Lý', image: 'icon.png', category: 'Giáo dục', quantity: 5, status: 'Không hiển thị' },
    { id: 25, name: 'Phương Pháp Giảng Dạy Mới', image: 'icon.png', category: 'Giáo dục', quantity: 12, status: 'Hiển thị' },
    { id: 26, name: 'To Kill a Mockingbird', image: 'icon.png', category: 'Văn học', quantity: 30, status: 'Hiển thị' },
    { id: 27, name: '1984', image: 'icon.png', category: 'Văn học', quantity: 20, status: 'Hiển thị' },
    { id: 28, name: 'The Catcher in the Rye', image: 'icon.png', category: 'Văn học', quantity: 10, status: 'Không hiển thị' },
    { id: 29, name: 'The Great Gatsby', image: 'icon.png', category: 'Văn học', quantity: 15, status: 'Hiển thị' },
    { id: 30, name: 'Harry Potter and the Sorcerer\'s Stone', image: 'icon.png', category: 'Văn học', quantity: 50, status: 'Hiển thị' },
    { id: 31, name: 'The Lean Startup', image: 'icon.png', category: 'Kinh tế', quantity: 20, status: 'Hiển thị' },
    { id: 32, name: 'Rich Dad Poor Dad', image: 'icon.png', category: 'Kinh tế', quantity: 25, status: 'Hiển thị' },
    { id: 33, name: 'Freakonomics', image: 'icon.png', category: 'Kinh tế', quantity: 30, status: 'Hiển thị' },
    { id: 34, name: 'Good to Great', image: 'icon.png', category: 'Kinh tế', quantity: 12, status: 'Hiển thị' },
    { id: 35, name: 'Outliers', image: 'icon.png', category: 'Kinh tế', quantity: 15, status: 'Hiển thị' },
    { id: 36, name: 'Thinking, Fast and Slow', image: 'icon.png', category: 'Tâm lý học', quantity: 20, status: 'Hiển thị' },
    { id: 37, name: 'The Power of Habit', image: 'icon.png', category: 'Tâm lý học', quantity: 18, status: 'Hiển thị' },
    { id: 38, name: 'Emotional Intelligence', image: 'icon.png', category: 'Tâm lý học', quantity: 10, status: 'Hiển thị' },
    { id: 39, name: 'The Art of Happiness', image: 'icon.png', category: 'Tâm lý học', quantity: 7, status: 'Không hiển thị' },
    { id: 40, name: 'Man’s Search for Meaning', image: 'icon.png', category: 'Tâm lý học', quantity: 5, status: 'Hiển thị' },
  ]

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
  navigateToAddBook(): void {
    this.router.navigate(['/themsach']);
  }
}
