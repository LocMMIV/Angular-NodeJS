import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email = '';
  password = '';

  constructor(readonly authService: AuthService, readonly router: Router) {}

  async login() {
    if (await this.authService.login(this.email, this.password)) {
      alert('Đăng nhập thành công!');
      this.router.navigate(['/']);
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  }
}
