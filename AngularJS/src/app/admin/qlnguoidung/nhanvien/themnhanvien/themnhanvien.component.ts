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
    username: '',
    password: '',
    confirmPassword: '',
  };

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
      username: '',
      password: '',
      confirmPassword: '',
    };
  }
}
