import { Component } from '@angular/core';

@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent {
  books = [
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1dvdf', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sáchscfsd 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sádsvdsch 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sávxcv vch 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốndsfds sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sácvfvsdfdh 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốvddsfesdsn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sdfssách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn dvsdsdfsách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    { title: 'Cuốn sách 1', author: 'Tác giả 1', category: 'novel', status: 'new', image: 'icon.png' },
    
  ];
  
// Biến lưu trữ thể loại và thứ tự sắp xếp
selectedCategory: string = '';
selectedSort: string = '';

// Phương thức xóa tất cả thể loại
clearCategory() {
  this.selectedCategory = '';
}

// Lọc và sắp xếp các sản phẩm
get filteredBooks() {
  let filtered = this.books;

  if (this.selectedCategory) {
    filtered = filtered.filter(book => book.category === this.selectedCategory);
  }

  if (this.selectedSort === 'asc') {
    filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (this.selectedSort === 'desc') {
    filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
  } else if (this.selectedSort === 'newest') {
    filtered = filtered.reverse();
  }

  return filtered;
}

// Phương thức thay đổi thể loại
setCategory(category: string) {
  this.selectedCategory = category;
}

// Phương thức thay đổi thứ tự sắp xếp
setSort(sort: string) {
  this.selectedSort = sort;
}

}
