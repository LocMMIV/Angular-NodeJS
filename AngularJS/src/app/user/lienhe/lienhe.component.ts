import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css'],
})
export class LienheComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Khởi tạo FormGroup với các Validator
    this.userForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      idcard: ['', [Validators.required, Validators.pattern('^[0-9]{9,12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      service: ['', Validators.required],
      description: ['', Validators.required], // Đảm bảo mô tả là bắt buộc
    });
  }

  // Hàm xử lý khi form được submit
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Hàm kiểm tra ký tự (chỉ cho phép chữ)
  validateText(event: any, field: string) {
    const value = event.target.value;
    const cleanValue = value.replace(/[^a-zA-ZÀ-ỹ\s]/g, ''); // Chỉ cho phép chữ cái và khoảng trắng
    this.userForm.controls[field].setValue(cleanValue);
  }

  // Hàm kiểm tra số (chỉ cho phép nhập số)
  validateNumber(event: any, field: string) {
    const value = event.target.value;
    const cleanValue = value.replace(/[^0-9]/g, ''); // Chỉ cho phép số
    this.userForm.controls[field].setValue(cleanValue);
  }
}
