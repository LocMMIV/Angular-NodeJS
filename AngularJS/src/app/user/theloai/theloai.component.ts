import { Component } from '@angular/core';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent {
  books = [
    { title: 'Dế Mèn Phiêu Lưu Ký', author: 'Tô Hoài', category: 'Văn học', status: 'new', image: 'icon.png' },
    { title: 'Những Người Khốn Khổ', author: 'Victor Hugo', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Văn học hiện đại', status: '', image: 'icon.png' },
    { title: 'Cuốn Sách Bí Ẩn', author: 'Arthur Conan Doyle', category: 'Hình sự', status: '', image: 'icon.png' },
    { title: 'Cuộc Đời Tác Giả', author: 'Ernest Hemingway', category: 'Non-fiction', status: 'new', image: 'icon.png' },
    { title: 'Ngày Mai Tôi Đi', author: 'Nguyễn Nhật Ánh', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Kinh Tế Học Cơ Bản', author: 'Paul Samuelson', category: 'Kinh tế', status: 'new', image: 'icon.png' },
    { title: 'Bắt Lúa', author: 'Nguyễn Quang Sáng', category: 'Văn học', status: '', image: 'icon.png' },
    { title: 'The Alchemist', author: 'Paulo Coelho', category: 'Tiểu thuyết triết lý', status: '', image: 'icon.png' },
    { title: 'Cuộc Chiến Thế Kỷ', author: 'Winston Churchill', category: 'Lịch sử', status: 'new', image: 'icon.png' },
    { title: 'Mắt Biếc', author: 'Nguyễn Nhật Ánh', category: 'Lãng mạn', status: '', image: 'icon.png' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Tiểu thuyết hiện đại', status: '', image: 'icon.png' },
    { title: 'Tâm Lý Học Cơ Bản', author: 'Sigmund Freud', category: 'Tâm lý học', status: 'new', image: 'icon.png' },
    { title: '1984', author: 'George Orwell', category: 'Chính trị', status: '', image: 'icon.png' },
    { title: 'Harry Potter và Hòn Đá Phù Thủy', author: 'J.K. Rowling', category: 'Kỳ ảo', status: '', image: 'icon.png' },
    { title: 'Cuốn Sách Vĩ Đại', author: 'Ralph Waldo Emerson', category: 'Non-fiction', status: 'new', image: 'icon.png' },
    { title: 'Giải Thích Kinh Tế', author: 'John Maynard Keynes', category: 'Kinh tế', status: '', image: 'icon.png' },
    { title: 'Những Cuộc Cách Mạng', author: 'Eric Hobsbawm', category: 'Lịch sử', status: 'new', image: 'icon.png' },
    { title: 'Quản Trị Kinh Doanh', author: 'Peter Drucker', category: 'Kinh tế', status: '', image: 'icon.png' },
    { title: 'Cảm Xúc Và Lý Trí', author: 'Daniel Goleman', category: 'Tâm lý học', status: 'new', image: 'icon.png' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', category: 'Kỳ ảo', status: '', image: 'icon.png' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Tiểu thuyết hiện đại', status: '', image: 'icon.png' },
    { title: 'Cái Tôi Và Cái Tự Do', author: 'Jean-Paul Sartre', category: 'Triết học', status: 'new', image: 'icon.png' },
    { title: 'Mùi Hương Cuộc Sống', author: 'Robert Frost', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', category: 'Khoa học viễn tưởng', status: '', image: 'icon.png' },
    { title: 'Lịch Sử Việt Nam', author: 'Trần Trọng Kim', category: 'Lịch sử', status: '', image: 'icon.png' },
    { title: 'Chuyến Tàu Kinh Hoàng', author: 'Agatha Christie', category: 'Hình sự', status: 'new', image: 'icon.png' },
    { title: 'Kỹ Năng Sống', author: 'Stephen Covey', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Cuộc Đời Của Những Kẻ Thắng Cuộc', author: 'Malcolm Gladwell', category: 'Non-fiction', status: 'new', image: 'icon.png' },
    { title: 'Bí Quyết Thành Công', author: 'Tony Robbins', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Khoa học viễn tưởng', status: '', image: 'icon.png' },
    { title: 'Về Quê', author: 'Tô Hoài', category: 'Văn học', status: 'new', image: 'icon.png' },
    { title: 'Cuộc Sống Của Những Người Khốn Khổ', author: 'Victor Hugo', category: 'Lịch sử', status: '', image: 'icon.png' },
    { title: 'The Diary of a Young Girl', author: 'Anne Frank', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Điều Kỳ Diệu Của Bánh Mì', author: 'Harlan Coben', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'Thuyết Phục Quá Mức', author: 'Malcolm Gladwell', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Mỗi Ngày Một Thế Giới', author: 'Paulo Coelho', category: 'Lãng mạn', status: 'new', image: 'icon.png' },
    { title: 'Lịch Sử Tư Tưởng Chính Trị', author: 'Lê Duẩn', category: 'Chính trị', status: '', image: 'icon.png' },
    { title: 'Vượt Lên Chính Mình', author: 'Nick Vujicic', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Sách Kinh Tế Cơ Bản', author: 'Milton Friedman', category: 'Kinh tế', status: 'new', image: 'icon.png' },
    { title: 'Sống Và Sống', author: 'Văn Quang', category: 'Văn học', status: '', image: 'icon.png' },
    { title: 'Cuộc Đời Cuộc Chiến', author: 'Erich Maria Remarque', category: 'Lịch sử', status: '', image: 'icon.png' },
    { title: 'Mặt Trái Của Lịch Sử', author: 'Adam Hochschild', category: 'Lịch sử', status: 'new', image: 'icon.png' },
    { title: 'Khoa Học Và Tương Lai', author: 'Stephen Hawking', category: 'Khoa học', status: '', image: 'icon.png' },
    { title: 'Đại Dương Xanh', author: 'Michael Porter', category: 'Kinh tế', status: '', image: 'icon.png' },
    { title: 'Khám Phá Thế Giới', author: 'Neil deGrasse Tyson', category: 'Khoa học', status: 'new', image: 'icon.png' },
    { title: 'Văn Học Cổ Điển', author: 'Leo Tolstoy', category: 'Tiểu thuyết cổ điển', status: '', image: 'icon.png' },
    { title: 'Tôi Là Ai', author: 'David Eagleman', category: 'Tâm lý học', status: 'new', image: 'icon.png' },
    { title: 'Tình Yêu Và Tham Vọng', author: 'Nguyễn Ngọc Tư', category: 'Lãng mạn', status: '', image: 'icon.png' },
    { title: 'Khi Bóng Tối Bừng Sáng', author: 'Haruki Murakami', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'Cuốn Theo Chiều Gió', author: 'Margaret Mitchell', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Sống Cùng Những Cuộc Cách Mạng', author: 'Friedrich Hayek', category: 'Kinh tế', status: '', image: 'icon.png' },
    { title: 'Giáo Dục Là Gì', author: 'John Dewey', category: 'Giáo dục', status: '', image: 'icon.png' },
    { title: 'Cuộc Đời Của Bố Già', author: 'Mario Puzo', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Đúng Lúc', author: 'Dan Brown', category: 'Hành động', status: 'new', image: 'icon.png' },
    { title: 'Bí Mật Của Thời Gian', author: 'H.G. Wells', category: 'Khoa học viễn tưởng', status: '', image: 'icon.png' },
    { title: 'Đối Mặt Với Thực Tế', author: 'Barbara Oakley', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Tâm Lý Học Trong Cuộc Sống', author: 'Daniel Kahneman', category: 'Tâm lý học', status: 'new', image: 'icon.png' },
    { title: 'Lịch Sử Thế Giới', author: 'J.M. Roberts', category: 'Lịch sử', status: '', image: 'icon.png' },
    { title: 'Trí Tuệ Cảm Xúc', author: 'Daniel Goleman', category: 'Tâm lý học', status: '', image: 'icon.png' },
    { title: 'Cô Gái Trong Tấm Gương', author: 'Jodi Picoult', category: 'Văn học', status: 'new', image: 'icon.png' },
    { title: 'Câu Chuyện Dài Nhất', author: 'Søren Kierkegaard', category: 'Triết học', status: '', image: 'icon.png' },
    { title: 'Mặt Trái Của Thế Giới', author: 'Christopher Hitchens', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Đảo Gió', author: 'José Saramago', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'Bố Già', author: 'Mario Puzo', category: 'Hành động', status: '', image: 'icon.png' },
    { title: 'Tự Do Và Sự Được Khen', author: 'Gillian Flynn', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Người Thừa Kế', author: 'John Grisham', category: 'Hình sự', status: 'new', image: 'icon.png' },
    { title: 'Giao Lộ Của Những Định Mệnh', author: 'Richard Paul Evans', category: 'Lãng mạn', status: '', image: 'icon.png' },
    { title: 'Chú Bé Bán Chiếu', author: 'Herman Hesse', category: 'Văn học', status: '', image: 'icon.png' },
    { title: 'Cuộc Sống Của Một Con Vật', author: 'George Orwell', category: 'Non-fiction', status: 'new', image: 'icon.png' },
    { title: 'The Second World War', author: 'Winston Churchill', category: 'Lịch sử', status: '', image: 'icon.png' },
    { title: 'Nghệ Thuật Chiến Tranh', author: 'Sun Tzu', category: 'Chính trị', status: '', image: 'icon.png' },
    { title: 'Trái Tim Cảm Thông', author: 'Maya Angelou', category: 'Văn học', status: 'new', image: 'icon.png' },
    { title: 'Con Đường Thịnh Vượng', author: 'Ayn Rand', category: 'Kinh tế', status: '', image: 'icon.png' },
    { title: 'Xác Định Thành Công', author: 'Zig Ziglar', category: 'Kỹ năng sống', status: 'new', image: 'icon.png' },
    { title: 'Vượt Qua Sợ Hãi', author: 'Susan Cain', category: 'Tâm lý học', status: '', image: 'icon.png' },
    { title: 'Cuộc Tự Sát Của Bóng Đêm', author: 'Toni Morrison', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Đảo Của Những Vị Thần', author: 'Thor Heyerdahl', category: 'Lịch sử', status: 'new', image: 'icon.png' },
    { title: 'Phá Vỡ Đường Biên', author: 'Ruth Ozeki', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Bảy Thói Quen Của Người Thành Đạt', author: 'Stephen Covey', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Dưới Ánh Trăng', author: 'Mark Twain', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Chuyến Bay Cuối Cùng', author: 'Amor Towles', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'The Power of Habit', author: 'Charles Duhigg', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Gió Mùa', author: 'Paulo Coelho', category: 'Lãng mạn', status: '', image: 'icon.png' },
    { title: 'Người Hùng Bất Tử', author: 'Joseph Campbell', category: 'Hành động', status: 'new', image: 'icon.png' },
    { title: 'Sự Tích Của Cuộc Sống', author: 'Khaled Hosseini', category: 'Tiểu thuyết', status: '', image: 'icon.png' },
    { title: 'Thời Gian Và Cái Chết', author: 'David Eagleman', category: 'Tâm lý học', status: 'new', image: 'icon.png' },
    { title: 'Trí Tuệ Nhân Tạo', author: 'Nick Bostrom', category: 'Khoa học', status: '', image: 'icon.png' },
    { title: 'Kẻ Thừa Kế', author: 'Jeffrey Archer', category: 'Hình sự', status: '', image: 'icon.png' },
    { title: 'Góc Quay Của Tương Lai', author: 'Stephen Hawking', category: 'Khoa học', status: 'new', image: 'icon.png' },
    { title: 'Vượt Lên Chính Mình', author: 'Nick Vujicic', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Bí Quyết Thành Công', author: 'Malcolm Gladwell', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Chân Dung Một Nữ Anh Hùng', author: 'Tạ Duy Anh', category: 'Tiểu thuyết', status: 'new', image: 'icon.png' },
    { title: 'Đánh Thức Niềm Tin', author: 'Brian Tracy', category: 'Kỹ năng sống', status: '', image: 'icon.png' },
    { title: 'Người Lạ Tình Cờ', author: 'Haruki Murakami', category: 'Lãng mạn', status: '', image: 'icon.png' },
    { title: 'Biên Niên Sử', author: 'Patrick Rothfuss', category: 'Kỳ ảo', status: '', image: 'icon.png' },
    { title: 'Sự Màu Nhiệm Của Sống', author: 'Mark Manson', category: 'Non-fiction', status: '', image: 'icon.png' },
    { title: 'Gặp Gỡ Những Con Người Tối Mật', author: 'Dan Brown', category: 'Hành động', status: '', image: 'icon.png' }
  ];
  
  categories = [
    'Tiểu thuyết', 'Lãng mạn', 'Văn học', 'Hành động',
    'Khoa học viễn tưởng', 'Giáo dục', 'Kỹ năng sống',
    'Tâm lý học', 'Lịch sử', 'Kinh tế', 'Chính trị',
    'Non-fiction', 'Fiction', 'Hình sự', 'Triết học', 'Kỳ ảo'
  ];
  selectedCategories: string[] = [];
  appliedFilters: string[] = [];
  selectedCategory: string = '';
  selectedSort: string = '';

  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  removeFilter(filter: string) {
      this.appliedFilters = this.appliedFilters.filter(item => item !== filter);
      this.selectedCategories = this.selectedCategories.filter(item => item !== filter);
  }

  clearAll() {
      this.appliedFilters = [];
      this.selectedCategories = [];
  }


  showOutsideCategories: boolean = true;


  toggleCategory(category: string, autoApply: boolean) {
  if (this.selectedCategories.includes(category)) {
    // Nếu thể loại đã được chọn, xóa nó khỏi danh sách đã chọn
    this.selectedCategories = this.selectedCategories.filter(item => item !== category);
  } else {
    // Nếu thể loại chưa được chọn, thêm nó vào danh sách đã chọn
    this.selectedCategories.push(category);
  }

  // Nếu autoApply là true (chọn từ ngoài menu), áp dụng lọc ngay lập tức
  if (this.selectedCategories.length > 0) {
    this.showOutsideCategories = false;
  }

  // Nếu autoApply là true (chọn từ ngoài menu), áp dụng lọc ngay lập tức
  if (autoApply) {
    // Áp dụng bộ lọc
    this.apply();
  }
}

apply() {
  this.appliedFilters = [...this.selectedCategories];
  this.showMenu = false;
}

cancel() {
  this.showMenu = false; // Đóng menu mà không thay đổi
}
  // Phương thức xóa tất cả thể loại
  clearCategory() {
    this.selectedCategory = '';
  }



  // Lọc và sắp xếp các sản phẩm
  get filteredBooks() {
    let filtered = this.books;

    // Lọc theo thể loại đã chọn
  if (this.selectedCategory) {
    filtered = filtered.filter(book => book.category.toLowerCase().includes(this.selectedCategory.toLowerCase()));
  }

  // Lọc theo các bộ lọc đã áp dụng
  if (this.appliedFilters.length > 0) {
    filtered = filtered.filter(book => {
      return this.appliedFilters.some(filter => book.category.toLowerCase().includes(filter.toLowerCase()));
    });
  }

    if (this.selectedSort === 'asc') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'desc') {
      filtered = filtered.sort((a, b) => b.status.localeCompare(a.status));
    } else if (this.selectedSort === 'newest') {
      filtered = filtered.filter(book => book.status === 'new');
      filtered = filtered.sort((a, b) => b.status.localeCompare(a.status));
    }

    return filtered;
  }

  // Phương thức thay đổi thứ tự sắp xếp
  setSort(sort: string) {
    this.selectedSort = sort;
  }

  selectedBook: any = null; // Cuốn sách được chọn để mượn

  // Hàm mở dropdown khi nhấn nút "Mượn sách"
  toggleDropdown(book: any) {
    if (this.selectedBook === book) {
      this.selectedBook = null; // Nếu cuốn sách đã được chọn, đóng dropdown
    } else {
      this.selectedBook = book; // Mở dropdown với cuốn sách được chọn
    }
  }

  // Hàm xử lý xác nhận mượn sách
  handleBorrow(book: any) {
    console.log('Mượn sách:', book);
    // Logic xử lý mượn sách (ví dụ: gọi API hoặc lưu vào cơ sở dữ liệu)
    this.selectedBook = null; // Đóng dropdown sau khi xác nhận
  }

  // Hàm đóng dropdown
  closeDropdown() {
    this.selectedBook = null; // Đóng dropdown
  }
}