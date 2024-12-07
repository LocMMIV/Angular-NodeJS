import { Component } from '@angular/core';

@Component({
  selector: 'app-themnhanvien',
  templateUrl: './themnhanvien.component.html',
  styleUrls: ['./themnhanvien.component.css']
})
export class ThemnhanvienComponent {
  employee = {
    fullName: '',
    idCard: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  allowOnlyNumbers(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Lấy đối tượng input từ sự kiện
    const sanitizedValue = inputElement.value.replace(/[^0-9]/g, ''); // Loại bỏ các ký tự không phải số
    inputElement.value = sanitizedValue; // Cập nhật lại giá trị trong ô input
  
    // Cập nhật lại dữ liệu vào model nếu sử dụng [(ngModel)]
    if (inputElement.name === 'idCard') {
      this.employee.idCard = sanitizedValue;
    } else if (inputElement.name === 'phoneNumber') {
      this.employee.phoneNumber = sanitizedValue;
    }
  }

  onSubmit() {
    if (this.employee.password !== this.employee.confirmPassword) {
      alert('Mật khẩu không khớp! Vui lòng kiểm tra lại.');
      return;
    }
  
    console.log('Nhân viên mới được thêm:', this.employee);
    alert(`Nhân viên "${this.employee.fullName}" đã được thêm thành công!`);
  
    // Reset form
    this.employee = {
      fullName: '',
      idCard: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
}
