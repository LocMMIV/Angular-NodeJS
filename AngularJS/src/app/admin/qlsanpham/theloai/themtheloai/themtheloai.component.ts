import { Component } from '@angular/core';

@Component({
  selector: 'app-themtheloai',
  templateUrl: './themtheloai.component.html',
  styleUrls: ['./themtheloai.component.css']
})
export class ThemtheloaiComponent {
  newCategory: string = '';

  onSubmit() {
    if (this.newCategory.trim()) {
      console.log('Thể loại mới được thêm:', this.newCategory);
      // Thực hiện logic thêm thể loại mới tại đây
      alert(`Thể loại "${this.newCategory}" đã được thêm!`);
      
      // Sau khi thêm thành công, có thể reset lại ô nhập:
      this.newCategory = '';
    }
  }
}
